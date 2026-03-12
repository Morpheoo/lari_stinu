import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? "";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cached;
}

async function dbConnect() {
    if (!MONGODB_URI) {
        throw new Error(
            'Please define the MONGODB_URI environment variable inside .env.local'
        );
    }

    // Si ya hay una conexión activa, retornarla
    if (cached.conn) {
        console.log('✅ Using cached MongoDB connection');
        return cached.conn;
    }

    // Si no hay promesa de conexión, crear una nueva
    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // Deshabilitar buffering para fallar rápido
            maxPoolSize: 10, // Máximo de conexiones en el pool
            minPoolSize: 2, // Mínimo de conexiones en el pool
            serverSelectionTimeoutMS: 5000, // Timeout para seleccionar servidor
            socketTimeoutMS: 45000, // Timeout para operaciones de socket
            family: 4, // Forzar IPv4
        };

        console.log('🔄 Creating new MongoDB connection...');
        cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log('✅ MongoDB connected successfully');
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        console.error("❌ MongoDB Connection Error:", e);
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

// Función para verificar el estado de la conexión
export function getConnectionStatus() {
    return {
        isConnected: mongoose.connection.readyState === 1,
        readyState: mongoose.connection.readyState,
        host: mongoose.connection.host,
        name: mongoose.connection.name,
    };
}

export default dbConnect;
