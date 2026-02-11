import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Mobile Menu & Logo */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menú</span>
                    </Button>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo_lari_stinu.png"
                            alt="Lari Stinu Logo"
                            width={150}
                            height={50}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/catalog" className="transition-colors hover:text-[var(--color-primary)]">
                        Catálogo
                    </Link>
                    <Link href="/artisans" className="transition-colors hover:text-[var(--color-primary)]">
                        Artesanos
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-[var(--color-primary)]">
                        Nosotros
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Buscar</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Carrito</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
