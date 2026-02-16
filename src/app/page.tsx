import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Newsletter } from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Newsletter />
      </main>

      {/* Simple Footer for now */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Lari Stinu. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
