import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            success: false,
            message: "Database diagnostic route disabled",
            data: {
                productsAvailable: products.length,
                runtimeSource: "file-backed catalog",
            },
        },
        { status: 410 }
    );
}
