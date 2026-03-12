import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, BadgeCheck, MapPin, ShoppingBag, Star, ThumbsUp } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { ArtisanMap } from "@/components/products/ArtisanMap";
import { Badge } from "@/components/ui/badge";
import { artisanProfiles, getProductsByArtisanId, getReviewsByArtisanId } from "@/data/artisans";
import { getArtisanMetrics, getResolvedReviewProductName } from "@/lib/catalog";

interface PageProps {
    params: Promise<{ slug: string }>;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((value) => (
                <Star
                    key={value}
                    className={`h-4 w-4 ${value <= rating ? "fill-yellow-400 text-yellow-400" : value - 0.5 <= rating ? "fill-yellow-400/50 text-yellow-400" : "text-gray-300"}`}
                />
            ))}
        </div>
    );
}

export default async function ArtisanProfilePage({ params }: PageProps) {
    const { slug } = await params;
    const artisan = artisanProfiles.find((entry) => entry.slug === slug);

    if (!artisan) {
        notFound();
    }

    const artisanProducts = getProductsByArtisanId(artisan.id);
    const artisanReviews = getReviewsByArtisanId(artisan.id);
    const metrics = getArtisanMetrics(artisan.id);

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Link
                        href="/artisans"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)]"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver a artesanos
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        <div className="relative h-80 lg:h-auto bg-gray-100">
                            <Image
                                src={artisan.image}
                                alt={artisan.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="lg:col-span-2 p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
                                            {artisan.name}
                                        </h1>
                                        {artisan.isVerified && (
                                            <BadgeCheck className="h-7 w-7 text-blue-500 flex-shrink-0" />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 mb-1">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">{artisan.location}</span>
                                    </div>
                                    <span className="inline-block bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1 rounded-full mt-2">
                                        {artisan.specialty}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {artisan.bio}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        <span className="text-2xl font-bold text-gray-900">{metrics.averageRating}</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Calificación</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-gray-900">{metrics.reviewCount}</p>
                                    <p className="text-xs text-gray-500">Reseñas</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-gray-900">{artisan.totalSales}</p>
                                    <p className="text-xs text-gray-500">Ventas</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-gray-900">{artisan.yearsExperience}</p>
                                    <p className="text-xs text-gray-500">Años exp.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-sm font-bold text-gray-900 mb-2">Técnicas que domina</h2>
                                <div className="flex flex-wrap gap-2">
                                    {artisan.techniques.map((technique) => (
                                        <Badge key={technique} variant="outline" className="text-xs bg-white">
                                            {technique}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {artisan.isVerified && (
                                <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                                        <BadgeCheck className="h-4 w-4" />
                                        Artesano verificado desde {artisan.verifiedSince}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                                        <Award className="h-4 w-4" />
                                        Técnica auténtica
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <ArtisanMap artisan={artisan} />

                <section className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-heading text-2xl font-bold text-gray-900">
                            Productos de {artisan.name.split(" ")[0]} ({artisanProducts.length})
                        </h2>
                        <Link href="/catalog" className="text-sm text-[var(--color-primary)] hover:underline">
                            Ver catálogo completo →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {artisanProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/catalog/${product.id}`}
                                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
                            >
                                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {product.isVerified && (
                                        <div className="absolute top-2 left-2">
                                            <Badge variant="gold" className="bg-yellow-500 text-white border-none text-xs">
                                                Auténtico
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-[var(--color-primary)] font-medium">{product.category}</p>
                                    <h3 className="font-semibold text-gray-900 text-sm mt-1 line-clamp-1">{product.name}</h3>
                                    <p className="text-lg font-bold text-gray-900 mt-2">${product.price.toLocaleString("es-MX")}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mt-16 mb-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-gray-900">
                                Reseñas de clientes
                            </h2>
                            <div className="flex items-center gap-2 mt-2">
                                <StarRating rating={metrics.averageRating} />
                                <span className="font-semibold text-gray-900">{metrics.averageRating}</span>
                                <span className="text-gray-400">·</span>
                                <span className="text-sm text-gray-500">{metrics.reviewCount} reseñas</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {artisanReviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-amber-500 text-white font-bold text-sm">
                                            {review.customerName.split(" ").map((name) => name[0]).join("")}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-gray-900 text-sm">{review.customerName}</span>
                                                {review.isVerifiedPurchase && (
                                                    <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                                                        <BadgeCheck className="h-3 w-3" />
                                                        Compra verificada
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-400">
                                                {review.customerLocation} · {new Date(review.date).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                                            </p>
                                        </div>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>

                                {getResolvedReviewProductName(review) && (
                                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                        <ShoppingBag className="h-3 w-3" />
                                        Producto: <span className="font-medium text-gray-700">{getResolvedReviewProductName(review)}</span>
                                    </p>
                                )}

                                <h3 className="font-semibold text-gray-900 text-sm mb-2">{review.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>

                                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-50">
                                    <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                                        <ThumbsUp className="h-3.5 w-3.5" />
                                        Útil ({review.helpful})
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
