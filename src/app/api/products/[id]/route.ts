import { getProductById } from "@/lib/catalog";
import { NextResponse } from "next/server";

interface RouteParams {
    params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return NextResponse.json(
            {
                success: false,
                error: "Product not found",
            },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        data: product,
    });
}
