"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartHandshake, Leaf } from "lucide-react";

const features = [
    {
        icon: <HeartHandshake className="w-10 h-10 text-[var(--color-primary)]" />,
        title: "Comercio Justo",
        description: "Cada pieza comprada apoya directamente a las familias de artesanos, asegurando un pago digno por su arte.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-[var(--color-secondary)]" />,
        title: "Autenticidad Garantizada",
        description: "Certificamos el origen de cada prenda. No es solo ropa, es patrimonio cultural intangible.",
    },
    {
        icon: <Sparkles className="w-10 h-10 text-[var(--color-accent)]" />,
        title: "Calidad Premium",
        description: "Materiales seleccionados y técnicas de bordado perfeccionadas por generaciones.",
    },
    {
        icon: <Leaf className="w-10 h-10 text-green-500" />,
        title: "Sostenible",
        description: "Producción lenta y consciente, respetando los tiempos naturales de creación y el medio ambiente.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function Features() {
    return (
        <section className="py-24 bg-[var(--color-background)] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-secondary)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-[var(--color-text)]">
                        Más que moda, una <span className="text-[var(--color-primary)]">conexión cultural</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        En Lari Stinu, nos dedicamos a preservar y promover el arte textil del Istmo,
                        creando un puente ético entre creadores y admiradores.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className="mb-6 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
