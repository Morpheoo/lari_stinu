"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Check, MapPin, ShoppingBag, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { ArtisanMap } from "@/components/products/ArtisanMap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { getArtisanById } from "@/data/artisans";
import { getProductById } from "@/lib/catalog";

export default function ProductPage() {
    const params = useParams<{ id: string }>();
    const product = getProductById(params.id);
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    if (!product) {
        notFound();
    }

    const artisanProfile = getArtisanById(product.artisan.id);

    const handleAddToCart = () => {
        setIsAdding(true);
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            color: product.color,
        });

        window.setTimeout(() => setIsAdding(false), 500);
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Link
                        href="/catalog"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)]"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al catálogo
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-gray-100 shadow-md">
                            {product.isVerified && (
                                <div className="absolute top-4 left-4 z-10">
                                    <Badge variant="gold" className="bg-yellow-500 text-white border-none shadow-sm text-sm py-1 px-3">
                                        <Star className="mr-1 h-3 w-3 fill-current" />
                                        Auténtico y verificado
                                    </Badge>
                                </div>
                            )}
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((view) => (
                                <div
                                    key={view}
                                    className={`relative aspect-square overflow-hidden rounded-2xl bg-gray-100 ${view === 1 ? "ring-2 ring-[var(--color-primary)]" : "opacity-70"}`}
                                >
                                    <Image
                                        src={product.image}
                                        alt={`Vista ${view} de ${product.name}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2">
                            <span className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold text-gray-900">${product.price.toLocaleString("es-MX")}</span>
                            <span className="text-sm text-gray-500">MXN</span>
                        </div>

                        <div className="prose prose-stone mb-8 text-gray-600 leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8 border-y border-gray-200 py-4">
                            <div>
                                <h2 className="text-sm font-bold text-gray-900 mb-1">Color</h2>
                                <p className="text-gray-600">{product.color}</p>
                            </div>
                            {product.material && (
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 mb-1">Material</h2>
                                    <p className="text-gray-600">{product.material}</p>
                                </div>
                            )}
                            {product.measurements && (
                                <div className="col-span-2 mt-2">
                                    <h2 className="text-sm font-bold text-gray-900 mb-1">Medidas</h2>
                                    <p className="text-gray-600">{product.measurements}</p>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button
                                size="lg"
                                className="flex-1 text-base h-12"
                                onClick={handleAddToCart}
                                disabled={isAdding}
                            >
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                {isAdding ? "Agregado" : "Agregar al carrito"}
                            </Button>
                            {artisanProfile && (
                                <Button asChild variant="outline" size="lg" className="h-12">
                                    <Link href={`/artisans/${artisanProfile.slug}`}>Ver artesano</Link>
                                </Button>
                            )}
                        </div>

                        <div className="mt-auto bg-[#F9FAFB] rounded-[2rem] p-6 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200 flex-shrink-0 border-2 border-white shadow-sm">
                                    <Image src={product.artisan.image} alt={product.artisan.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h2 className="font-heading text-xl font-bold text-gray-900 mb-1">
                                        Hecho por {product.artisan.name}
                                    </h2>
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {product.artisan.location}
                                    </div>
                                    <p className="text-sm text-gray-600 italic">
                                        &quot;{product.artisan.story}&quot;
                                    </p>
                                    {artisanProfile && (
                                        <Button asChild variant="link" className="px-0 mt-2 text-[var(--color-primary)]">
                                            <Link href={`/artisans/${artisanProfile.slug}`}>Ver perfil del artesano</Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Envío seguro a todo México</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Pago directo al artesano</span>
                            </div>
                        </div>

                        <ArtisanMap artisan={product.artisan} />
                    </div>
                </div>
            </main>
        </div>
    );
}
