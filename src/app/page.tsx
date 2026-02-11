import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:py-32 overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] mb-6 leading-tight">
              Moda con Alma del <br />
              <span className="text-[var(--color-primary)]">Istmo de Tehuantepec</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
              Conectamos directamente a los artesanos locales con el mundo.
              Prendas auténticas, comercio justo y cultura viva.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/catalog">
                <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  Explorar Catálogo
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                  Conoce la Historia
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative Elements (CSS shapes for authentic feel) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        </section>

        {/* Features Preview */}
        <section className="py-16 bg-[var(--color-muted)]">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-heading text-xl font-bold mb-2">Comercio Justo</h3>
              <p className="text-sm text-gray-600">Garantizamos que el pago llegue a manos de quien teje la historia.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-heading text-xl font-bold mb-2">Autenticidad</h3>
              <p className="text-sm text-gray-600">Cada prenda lleva el certificado de origen y cultura del Istmo.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-heading text-xl font-bold mb-2">Envíos Seguros</h3>
              <p className="text-sm text-gray-600">Llevamos la tradición hasta tu puerta con los mejores servicios logísticos.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
