import { Header } from "@/components/layout/Header"
import { artisanProfiles, getProductsByArtisanId, getReviewsByArtisanId } from "@/data/artisans"
import { BadgeCheck, MapPin, Star, ShoppingBag, Award, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ArtisansPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                />
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <span className="inline-block text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">
                        Conoce a quienes hacen la magia
                    </span>
                    <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
                        Nuestros Artesanos
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Cada pieza de Lari Stinu es creada por manos expertas del Istmo de Tehuantepec.
                        Conoce las historias, técnicas y comunidades detrás de tu compra.
                    </p>
                    <div className="flex justify-center gap-8 mt-10 text-sm text-gray-400">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">{artisanProfiles.length}</p>
                            <p>Artesanos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">6</p>
                            <p>Comunidades</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-white">100%</p>
                            <p>Verificados</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artisan Grid */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artisanProfiles.map((artisan) => {
                        const artisanProducts = getProductsByArtisanId(artisan.id);
                        const artisanReviews = getReviewsByArtisanId(artisan.id);

                        return (
                            <Link
                                key={artisan.id}
                                href={`/artisans/${artisan.slug}`}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Artisan Image */}
                                <div className="relative h-56 bg-gray-100 overflow-hidden">
                                    <Image
                                        src={artisan.image}
                                        alt={artisan.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Verification Badge */}
                                    {artisan.isVerified && (
                                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-green-700 shadow-sm">
                                            <BadgeCheck className="h-3.5 w-3.5" />
                                            Verificado
                                        </div>
                                    )}

                                    {/* Name overlay */}
                                    <div className="absolute bottom-3 left-4 right-4">
                                        <h2 className="font-heading text-xl font-bold text-white drop-shadow-lg">
                                            {artisan.name}
                                        </h2>
                                        <div className="flex items-center gap-1 text-white/80 text-sm">
                                            <MapPin className="h-3.5 w-3.5" />
                                            {artisan.location.split(",")[0]}
                                        </div>
                                    </div>
                                </div>

                                {/* Artisan Info */}
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="inline-block bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {artisan.specialty}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {artisan.yearsExperience} años
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                                        {artisan.story}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                        <div className="flex items-center gap-1 text-sm">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold text-gray-900">{artisan.rating}</span>
                                            <span className="text-gray-400">({artisanReviews.length})</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <ShoppingBag className="h-4 w-4" />
                                            {artisanProducts.length} productos
                                        </div>
                                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            {/* Trust Section */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="font-heading text-3xl font-bold mb-8">¿Cómo verificamos a nuestros artesanos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 mx-auto mb-4">
                                <BadgeCheck className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Identidad Verificada</h3>
                            <p className="text-sm text-gray-600">
                                Visitamos personalmente cada taller y verificamos la identidad del artesano y su comunidad.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 mx-auto mb-4">
                                <Award className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Técnica Auténtica</h3>
                            <p className="text-sm text-gray-600">
                                Verificamos que cada pieza sea hecha a mano con las técnicas tradicionales que el artesano describe.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 mx-auto mb-4">
                                <Star className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Reseñas Reales</h3>
                            <p className="text-sm text-gray-600">
                                Solo compradores verificados pueden dejar reseñas, garantizando opiniones auténticas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
