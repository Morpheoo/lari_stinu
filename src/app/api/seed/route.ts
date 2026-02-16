import dbConnect from "@/lib/db/connect";
import Product from "@/models/Product";
import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();

        // Clear existing data to avoid duplicates for this demo
        await Product.deleteMany({});

        // Transform mock data to match Schema (if needed, but looks consistent)
        const seedData = products.map(p => ({
            name: p.name,
            price: p.price,
            category: p.category,
            image: p.image,
            color: p.color,
            isVerified: p.isVerified,
            artisan: {
                name: p.artisan.name,
                location: p.artisan.location
            },
            description: "Una pieza única hecha a mano con técnicas tradicionales.",
            stock: 5
        }));

        await Product.insertMany(seedData);

        return NextResponse.json({ message: "Database seeded successfully", count: seedData.length });
    } catch (error) {
        return NextResponse.json({ error: "Failed to seed database", details: error }, { status: 500 });
    }
}
