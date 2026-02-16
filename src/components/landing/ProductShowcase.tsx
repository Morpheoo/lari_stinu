"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Using placeholder images that we know exist or likely exist based on the list
const products = [
    {
        id: 1,
        name: "Huipil de Gala",
        price: "$3,500 MXN",
        image: "/images/huipil-rojo.jpg",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Traje Completo",
        price: "$12,000 MXN",
        image: "/images/vestido-negro.jpg",
        tag: "Exclusivo"
    },
    {
        id: 3,
        name: "Accesorios Filigrana",
        price: "$1,200 MXN",
        image: "/images/collar-filigrana.jpg",
        tag: "Nuevo"
    },
];

export function ProductShowcase() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm">Colección Destacada</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-heading">Favoritos de la Temporada</h2>
                    </div>
                    <Link href="/catalog" className="hidden md:block">
                        <Button variant="ghost" className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 hover:bg-[var(--color-primary)]/10 font-medium">
                            Ver todo el catálogo <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
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

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-gray-900 shadow-sm border border-gray-100">
                                        {product.tag}
                                    </span>
                                </div>

                                {/* Quick Add Button */}
                                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 shadow-lg border-none">
                                        Ver Detalles
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">{product.name}</h3>
                                <p className="text-[var(--color-primary)] font-medium text-lg">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/catalog">
                        <Button variant="outline" size="lg" className="w-full">
                            Ver todo el catálogo
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
