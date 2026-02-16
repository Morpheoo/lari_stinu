"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Huipil", "Ropa", "Joyería", "Accesorios", "Hogar"]
const prices = ["$0 - $500", "$500 - $1500", "$1500 - $3000", "$3000 - $5000", "$5000+"]
const locations = [
    "Juchitán de Zaragoza",
    "Santo Domingo Tehuantepec",
    "San Mateo del Mar",
    "Ixtaltepec",
    "San Blas Atempa",
    "Unión Hidalgo",
]
const artisans = [
    "María López Pineda",
    "Juana Martínez Regalado",
    "Taller Hermanos García",
    "Rosa Elena Cruz",
    "Petrona Ruiz Jiménez",
    "Elena Santiago Vásquez",
    "Félix Montaño López",
    "Carmen Toledo Pineda",
    "Lucía Orozco Fuentes",
    "Ángel Zárate Pineda",
]

export function ProductFilters() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [showAllArtisans, setShowAllArtisans] = useState(false)

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const visibleArtisans = showAllArtisans ? artisans : artisans.slice(0, 5)

    return (
        <div className="space-y-8">
            {/* Categories */}
            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Categorías</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <button
                                onClick={() => toggleCategory(category)}
                                className={cn(
                                    "flex h-5 w-5 items-center justify-center rounded border border-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                    selectedCategories.includes(category) ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white" : "bg-white"
                                )}
                            >
                                {selectedCategories.includes(category) && <Check className="h-3 w-3" />}
                            </button>
                            <label
                                className="text-sm font-medium leading-none cursor-pointer"
                                onClick={() => toggleCategory(category)}
                            >
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Precio</h3>
                <div className="space-y-2">
                    {prices.map((price) => (
                        <div key={price} className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded-full border border-gray-300" />
                            <span className="text-sm">{price}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Locations */}
            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Ubicación</h3>
                <div className="space-y-2">
                    {locations.map((loc) => (
                        <div key={loc} className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded border border-gray-300" />
                            <span className="text-sm">{loc}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Artisans */}
            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Artesanos</h3>
                <div className="space-y-2">
                    {visibleArtisans.map((artisan) => (
                        <div key={artisan} className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded border border-gray-300" />
                            <span className="text-sm">{artisan}</span>
                        </div>
                    ))}
                </div>
                {artisans.length > 5 && (
                    <button
                        onClick={() => setShowAllArtisans(!showAllArtisans)}
                        className="mt-2 text-sm text-[var(--color-primary)] hover:underline"
                    >
                        {showAllArtisans ? "Ver menos" : `Ver todos (${artisans.length})`}
                    </button>
                )}
            </div>

            <Button variant="outline" className="w-full">
                Limpiar Filtros
            </Button>
        </div>
    )
}
