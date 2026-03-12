import { products } from "@/data/products";
import {
    filterProducts,
    sortProducts,
    type CatalogSort,
} from "@/lib/catalog";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const location = searchParams.get("location");
    const artisan = searchParams.get("artisan");
    const search = searchParams.get("q") ?? searchParams.get("search");
    const sort = (searchParams.get("sort") ?? "featured") as CatalogSort;
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10);
    const skip = Number.parseInt(searchParams.get("skip") || "0", 10);

    const filteredProducts = filterProducts(products, {
        search: search ?? undefined,
        categories: category && category !== "all" ? [category] : [],
        location: location && location !== "all" ? location : undefined,
        artisan: artisan && artisan !== "all" ? artisan : undefined,
    });
    const sortedProducts = sortProducts(filteredProducts, sort);
    const paginatedProducts = sortedProducts.slice(skip, skip + limit);

    return NextResponse.json({
        success: true,
        data: paginatedProducts,
        pagination: {
            total: sortedProducts.length,
            limit,
            skip,
            hasMore: skip + limit < sortedProducts.length,
        },
    });
}
