"use client";

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Product } from "@/data/products"
import { cn } from "@/lib/utils"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

interface ProductCardProps {
    product: Product
    className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
    const { addItem } = useCart()
    const [isAdding, setIsAdding] = useState(false)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        
        setIsAdding(true)
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color
        })
        
        // Feedback visual
        setTimeout(() => setIsAdding(false), 500)
    }

    return (
        <div className={cn("group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md", className)}>
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                {/* Verification Badge */}
                {product.isVerified && (
                    <div className="absolute top-2 left-2 z-10">
                        <Badge variant="gold" className="bg-yellow-500 text-white border-none shadow-sm">
                            Auténtico
                        </Badge>
                    </div>
                )}

                {/* Image */}
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-2 text-gray-600 transition-colors hover:bg-white hover:text-red-500">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Añadir a favoritos</span>
                </button>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2">
                    <p className="text-xs text-gray-500 font-medium">{product.category}</p>
                    <h3 className="font-heading text-lg font-bold leading-tight text-gray-900 group-hover:text-[var(--color-primary)]">
                        <Link href={`/catalog/${product.id}`}>
                            <span className="absolute inset-0" aria-hidden="true" />
                            {product.name}
                        </Link>
                    </h3>
                </div>

                <div className="mt-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500">Por {product.artisan.name}</p>
                            <p className="text-lg font-bold text-[var(--color-primary)]">
                                ${product.price.toLocaleString("es-MX")}
                            </p>
                        </div>
                        <Button 
                            size="icon" 
                            variant="secondary" 
                            className="rounded-full relative z-20"
                            onClick={handleAddToCart}
                            disabled={isAdding}
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Añadir al carrito</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
