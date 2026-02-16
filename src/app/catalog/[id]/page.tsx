import { Header } from "@/components/layout/Header"
import { ArtisanMap } from "@/components/products/ArtisanMap"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import { ArrowLeft, Check, Heart, MapPin, Share2, ShoppingBag, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {/* Breadcrumb / Back Navigation */}
                <div className="mb-6">
                    <Link
                        href="/catalog"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)]"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Catálogo
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Column: Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 shadow-md">
                            {product.isVerified && (
                                <div className="absolute top-4 left-4 z-10">
                                    <Badge variant="gold" className="bg-yellow-500 text-white border-none shadow-sm text-sm py-1 px-3">
                                        <Star className="mr-1 h-3 w-3 fill-current" />
                                        Auténtico & Verificado
                                    </Badge>
                                </div>
                            )}
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnail placeholders for future gallery */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 ${i === 1 ? 'ring-2 ring-[var(--color-primary)]' : 'opacity-70 hover:opacity-100'}`}>
                                    <Image
                                        src={product.image}
                                        alt={`Vista ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <span className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold text-gray-900">${product.price.toLocaleString("es-MX")}</span>
                            <span className="text-sm text-gray-500">MXN</span>
                        </div>

                        <div className="prose prose-stone mb-8 text-gray-600 leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        {/* Product Meta: Color, Material */}
                        <div className="grid grid-cols-2 gap-4 mb-8 border-y border-gray-200 py-4">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-1">Color</h3>
                                <p className="text-gray-600">{product.color}</p>
                            </div>
                            {product.material && (
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Material</h3>
                                    <p className="text-gray-600">{product.material}</p>
                                </div>
                            )}
                            {product.measurements && (
                                <div className="col-span-2 mt-2">
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">Medidas</h3>
                                    <p className="text-gray-600">{product.measurements}</p>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button size="lg" className="flex-1 text-base h-12">
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                Agregar al Carrito
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12">
                                <Heart className="mr-2 h-5 w-5" />
                                Guardar
                            </Button>
                            <Button variant="ghost" size="icon" className="h-12 w-12 border">
                                <Share2 className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Artisan Story Section */}
                        <div className="mt-auto bg-[#F9FAFB] rounded-xl p-6 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200 flex-shrink-0 border-2 border-white shadow-sm">
                                    {/* Placeholder for artisan avatar if image is missing */}
                                    {product.artisan.image ? (
                                        <Image src={product.artisan.image} alt={product.artisan.name} fill className="object-cover" />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center bg-[var(--color-primary)] text-white font-bold text-xl">
                                            {product.artisan.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
                                        Hecho por {product.artisan.name}
                                    </h3>
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {product.artisan.location}
                                    </div>
                                    <p className="text-sm text-gray-600 italic">
                                        "{product.artisan.story}"
                                    </p>
                                    <Button variant="link" className="px-0 mt-2 text-[var(--color-primary)]">
                                        Ver perfil del artesano &rarr;
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Value Props */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Envío seguro a todo México</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-green-500" />
                                <span>Pago directo al artesano</span>
                            </div>
                        </div>

                        {/* Artisan Location Map */}
                        <ArtisanMap artisan={product.artisan} />

                    </div>
                </div>
            </main>
        </div>
    )
}
