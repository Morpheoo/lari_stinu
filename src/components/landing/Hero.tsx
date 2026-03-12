"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="flower-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                            <circle cx="30" cy="30" r="10" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#flower-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-sm font-semibold tracking-wider mb-4 border border-[var(--color-primary)]/30">
                            AUTÉNTICO ARTE ZAPOTECA
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight font-heading">
                            Vestir con <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                                Alma e Historia
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                    >
                        Descubre la elegancia atemporal del Istmo de Tehuantepec.
                        Cada prenda es una obra maestra tejida a mano, cargada de tradición y orgullo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:scale-105">
                            <Link href="/catalog">Explorar Colección</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all hover:scale-105">
                            <Link href="/about">Nuestra Historia</Link>
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative h-[500px] w-full hidden lg:block"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-secondary)]/20 rounded-full blur-[100px]" />

                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
                        <Image
                            src="/images/catalogo/vestido-negro.png"
                            alt="Vestido Tehuana de Gala"
                            fill
                            className="object-cover object-center"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <p className="font-medium text-sm text-gray-300 uppercase tracking-widest mb-1">Pieza destacada</p>
                            <h3 className="text-2xl font-bold font-heading">Traje de Gala en Terciopelo</h3>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl max-w-xs text-white"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-sm font-medium">Bordado a mano por <span className="text-[var(--color-primary)]">artesanos locales</span></p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
