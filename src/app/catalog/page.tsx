import { Header } from "@/components/layout/Header"
import { ProductCard } from "@/components/products/ProductCard"
import { ProductFilters } from "@/components/products/ProductFilters"
import { products } from "@/data/products"

export default function CatalogPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Header Mobile Title */}
                    <div className="md:hidden mb-4">
                        <h1 className="font-heading text-3xl font-bold text-[var(--color-text)]">Catálogo</h1>
                        <p className="text-gray-500">Explora la colección auténtica.</p>
                    </div>

                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
                        <ProductFilters />
                    </aside>

                    {/* Main Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h1 className="hidden md:block font-heading text-3xl font-bold text-[var(--color-text)]">Catálogo</h1>
                                <p className="hidden md:block text-gray-500">Mostrando {products.length} productos auténticos</p>
                            </div>
                            {/* Sort Dropdown Placeholder */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Ordenar por:</span>
                                <select className="border-none bg-transparent font-medium text-[var(--color-text)] focus:ring-0">
                                    <option>Relevancia</option>
                                    <option>Precio: Menor a Mayor</option>
                                    <option>Precio: Mayor a Menor</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
