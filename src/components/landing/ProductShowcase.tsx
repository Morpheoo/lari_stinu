"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getFeaturedProductTag } from "@/lib/catalog";

const featuredProducts = getFeaturedProducts();

export function ProductShowcase() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm">Colección destacada</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-heading">Favoritos de la temporada</h2>
                    </div>
                    <Button asChild variant="ghost" className="hidden md:inline-flex text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 hover:bg-[var(--color-primary)]/10 font-medium">
                        <Link href="/catalog">
                            Ver todo el catálogo <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-900 shadow-sm border border-gray-100">
                                        {getFeaturedProductTag(product.id)}
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button asChild className="w-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg border-none">
                                        <Link href={`/catalog/${product.id}`}>Ver detalles</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">{product.category}</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">{product.name}</h3>
                                <p className="text-[var(--color-primary)] font-medium text-lg">${product.price.toLocaleString("es-MX")} MXN</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button asChild variant="outline" size="lg" className="w-full">
                        <Link href="/catalog">Ver todo el catálogo</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
