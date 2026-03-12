"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/cart/CartButton";

const navItems = [
    { href: "/catalog", label: "Catálogo" },
    { href: "/artisans", label: "Artesanos" },
    { href: "/about", label: "Nosotros" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-[var(--color-primary)]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="icon">
                        <Link href="/catalog" aria-label="Buscar en el catálogo">
                            <Search className="h-5 w-5" />
                        </Link>
                    </Button>
                    <CartButton />
                </div>
            </div>

            {isMenuOpen && (
                <nav className="border-t border-gray-200 bg-[var(--color-background)] px-4 py-4 md:hidden">
                    <div className="container mx-auto flex flex-col gap-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--color-primary)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
