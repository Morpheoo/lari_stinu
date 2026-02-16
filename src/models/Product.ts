import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    price: number;
    category: string;
    image: string;
    color: string;
    isVerified: boolean;
    artisan: {
        name: string;
        location: string;
        story?: string;
    };
    description?: string;
    stock: number;
    createdAt: Date;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    color: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    artisan: {
        name: { type: String, required: true },
        location: { type: String, required: true },
        story: { type: String }
    },
    description: { type: String },
    stock: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});

// Prevent model recompilation error in development
export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
