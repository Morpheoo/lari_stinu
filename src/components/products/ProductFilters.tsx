"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
    categories: string[];
    locations: string[];
    artisans: string[];
    selectedCategories: string[];
    selectedLocation: string;
    selectedArtisan: string;
    onToggleCategory: (category: string) => void;
    onSelectLocation: (location: string) => void;
    onSelectArtisan: (artisan: string) => void;
    onClear: () => void;
}

interface FilterOptionProps {
    checked: boolean;
    label: string;
    onClick: () => void;
    type?: "checkbox" | "radio";
}

function FilterOption({
    checked,
    label,
    onClick,
    type = "checkbox",
}: FilterOptionProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-3 text-left"
        >
            <span
                className={cn(
                    "flex h-5 w-5 items-center justify-center border border-gray-300 bg-white transition-colors",
                    type === "radio" ? "rounded-full" : "rounded",
                    checked && "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                )}
            >
                {checked && <Check className="h-3 w-3" />}
            </span>
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}

export function ProductFilters({
    categories,
    locations,
    artisans,
    selectedCategories,
    selectedLocation,
    selectedArtisan,
    onToggleCategory,
    onSelectLocation,
    onSelectArtisan,
    onClear,
}: ProductFiltersProps) {
    return (
        <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Categorías</h3>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <FilterOption
                            key={category}
                            checked={selectedCategories.includes(category)}
                            label={category}
                            onClick={() => onToggleCategory(category)}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Ubicación</h3>
                <div className="space-y-3">
                    <FilterOption
                        checked={selectedLocation === ""}
                        label="Todas"
                        onClick={() => onSelectLocation("")}
                        type="radio"
                    />
                    {locations.map((location) => (
                        <FilterOption
                            key={location}
                            checked={selectedLocation === location}
                            label={location}
                            onClick={() => onSelectLocation(selectedLocation === location ? "" : location)}
                            type="radio"
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-heading text-lg font-bold mb-4">Artesanos</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                    <FilterOption
                        checked={selectedArtisan === ""}
                        label="Todos"
                        onClick={() => onSelectArtisan("")}
                        type="radio"
                    />
                    {artisans.map((artisan) => (
                        <FilterOption
                            key={artisan}
                            checked={selectedArtisan === artisan}
                            label={artisan}
                            onClick={() => onSelectArtisan(selectedArtisan === artisan ? "" : artisan)}
                            type="radio"
                        />
                    ))}
                </div>
            </div>

            <Button variant="outline" className="w-full" onClick={onClear}>
                Limpiar filtros
            </Button>
        </div>
    );
}
