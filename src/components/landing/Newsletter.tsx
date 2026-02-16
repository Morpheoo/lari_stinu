"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-20 bg-[var(--color-primary)] relative overflow-hidden text-white">
            {/* Abstract Pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Únete a nuestra comunidad</h2>
                    <p className="text-lg text-white/90 mb-10 leading-relaxed">
                        Recibe historias de nuestros artesanos, nuevas colecciones y ofertas exclusivas directamente en tu correo.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            type="email"
                            placeholder="tu@correo.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg backdrop-blur-sm focus-visible:ring-white/50"
                        />
                        <Button size="lg" className="h-12 bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold px-8 shadow-lg hover:shadow-xl transition-all">
                            Suscribirse <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </form>

                    <p className="mt-6 text-xs text-white/60">
                        Respetamos tu privacidad. Puedes cancelar la suscripción en cualquier momento.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
