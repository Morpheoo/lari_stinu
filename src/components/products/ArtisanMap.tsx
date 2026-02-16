import { MapPin, Clock, Navigation } from "lucide-react"
import type { Artisan } from "@/data/products"

interface ArtisanMapProps {
    artisan: Artisan;
}

export function ArtisanMap({ artisan }: ArtisanMapProps) {
    const { lat, lng } = artisan.coordinates;
    const mapQuery = encodeURIComponent(artisan.location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=13&output=embed`;

    return (
        <div className="mt-8 rounded-xl border border-gray-200 overflow-hidden">
            {/* Map Header */}
            <div className="bg-white px-5 py-4 border-b border-gray-100">
                <h3 className="font-heading text-lg font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
                    Origen del Producto
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    Hecho a mano en {artisan.location}
                </p>
            </div>

            {/* Embedded Map */}
            <div className="relative w-full h-[250px] bg-gray-100">
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Ubicación de ${artisan.name}`}
                />
            </div>

            {/* Map Footer: Delivery Info */}
            <div className="bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                        <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Ubicación</p>
                        <p className="text-sm font-medium text-gray-900">{artisan.location.split(",")[0]}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                        <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Tiempo estimado de envío</p>
                        <p className="text-sm font-medium text-gray-900">{artisan.estimatedDelivery}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                            <Navigation className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">¿Quieres visitarnos?</p>
                            <p className="text-sm font-medium text-[var(--color-primary)]">Abrir en Google Maps</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
