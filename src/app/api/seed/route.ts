import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        {
            success: false,
            error: "Seed route disabled",
            message:
                "The catalog now uses file-backed data as the canonical source. This endpoint no longer mutates runtime data.",
            stats: {
                availableProducts: products.length,
            },
        },
        { status: 410 }
    );
}
