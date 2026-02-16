import { Header } from "@/components/layout/Header";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] font-sans">
            <Header />
            <main className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase mb-4 block">Nuestra Historia</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                        El Alma del Istmo
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Lari Stinu nace del deseo de preservar y compartir la riqueza textil del Istmo de Tehuantepec.
                        Cada hilo cuenta una historia de tradición, resistencia y belleza que ha pasado de generación en generación.
                    </p>
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative mb-12 shadow-lg">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 italic">
                            (Video o Imagen de Artesanos trabajando)
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl font-bold mb-4 text-gray-800">Nuestra Misión</h2>
                    <p className="text-gray-600 mb-8">
                        Empoderar a las comunidades de artesanos a través de un comercio justo y transparente,
                        llevando su arte a cada rincón del mundo sin perder la esencia que lo hace único.
                    </p>
                </div>
            </main>
        </div>
    );
}
