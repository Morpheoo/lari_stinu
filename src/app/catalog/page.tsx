"use client";

import { useDeferredValue, useState } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { products } from "@/data/products";
import {
    filterProducts,
    getCatalogFacets,
    sortProducts,
    type CatalogSort,
} from "@/lib/catalog";

const catalogFacets = getCatalogFacets();

export default function CatalogPage() {
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedArtisan, setSelectedArtisan] = useState("");
    const [sortBy, setSortBy] = useState<CatalogSort>("featured");
    const deferredSearch = useDeferredValue(search);

    const filteredProducts = sortProducts(
        filterProducts(products, {
            search: deferredSearch,
            categories: selectedCategories,
            location: selectedLocation || undefined,
            artisan: selectedArtisan || undefined,
        }),
        sortBy
    );

    const toggleCategory = (category: string) => {
        setSelectedCategories((current) =>
            current.includes(category)
                ? current.filter((value) => value !== category)
                : [...current, category]
        );
    };

    const clearFilters = () => {
        setSearch("");
        setSelectedCategories([]);
        setSelectedLocation("");
        setSelectedArtisan("");
        setSortBy("featured");
    };

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-sm border border-gray-100">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">Colección viva</p>
                            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">Catálogo artesanal</h1>
                            <p className="mt-2 text-gray-500">
                                {filteredProducts.length} de {products.length} piezas disponibles
                            </p>
                        </div>

                        <div className="w-full md:max-w-sm">
                            <label className="relative block">
                                <span className="sr-only">Buscar en el catálogo</span>
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                <input
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Buscar por prenda, técnica o artesano"
                                    className="w-full rounded-full border border-gray-200 bg-[var(--color-background)] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[var(--color-primary)]"
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    <aside className="w-full lg:w-80 lg:flex-shrink-0">
                        <ProductFilters
                            categories={catalogFacets.categories}
                            locations={catalogFacets.locations}
                            artisans={catalogFacets.artisans}
                            selectedCategories={selectedCategories}
                            selectedLocation={selectedLocation}
                            selectedArtisan={selectedArtisan}
                            onToggleCategory={toggleCategory}
                            onSelectLocation={setSelectedLocation}
                            onSelectArtisan={setSelectedArtisan}
                            onClear={clearFilters}
                        />
                    </aside>

                    <div className="flex-1">
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-gray-500">
                                Explora prendas y accesorios con origen, técnica e historia visibles.
                            </p>
                            <label className="flex items-center gap-3 text-sm text-gray-500">
                                <span>Ordenar por</span>
                                <select
                                    value={sortBy}
                                    onChange={(event) => setSortBy(event.target.value as CatalogSort)}
                                    className="rounded-full border border-gray-200 bg-white px-4 py-2 font-medium text-[var(--color-text)] outline-none"
                                >
                                    <option value="featured">Destacados</option>
                                    <option value="price-asc">Precio: menor a mayor</option>
                                    <option value="price-desc">Precio: mayor a menor</option>
                                    <option value="name-asc">Nombre: A-Z</option>
                                </select>
                            </label>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className="rounded-[2rem] border border-dashed border-gray-300 bg-white px-6 py-14 text-center shadow-sm">
                                <h2 className="font-heading text-2xl font-bold text-gray-900">No encontramos piezas con esos filtros</h2>
                                <p className="mt-3 text-gray-500">Prueba con otra categoría, ubicación o limpia la búsqueda.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
