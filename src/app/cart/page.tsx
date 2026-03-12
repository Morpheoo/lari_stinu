"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem } from "@/contexts/CartContext";

export default function CartPage() {
  const { items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart } = useCart();

  const handleIncrement = (item: CartItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.color,
      size: item.size,
    });
  };

  const handleDecrement = (itemId: string, currentQuantity: number) => {
    if (currentQuantity <= 1) {
      removeItem(itemId);
      return;
    }

    updateQuantity(itemId, currentQuantity - 1);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/catalog"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al catálogo
          </Link>
        </div>

        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Carrito de compras</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 rounded-[2rem] border border-dashed border-gray-300 bg-white">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">
              Parece que aún no has agregado productos a tu carrito.
            </p>
            <Button asChild className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]">
              <Link href="/catalog">Explorar catálogo</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Productos ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Vaciar carrito
                    </Button>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={item.id} className="p-6 flex items-center gap-6">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                          </div>
                          <p className="text-lg font-semibold text-gray-900">
                            ${(item.price * item.quantity).toLocaleString("es-MX")}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-4">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleDecrement(item.id, item.quantity)}
                              className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => handleIncrement(item)}
                              className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Resumen de compra</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${totalPrice.toLocaleString("es-MX")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">Calculado al finalizar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Impuestos</span>
                    <span className="font-medium">Calculados al finalizar</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${totalPrice.toLocaleString("es-MX")}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] py-3 text-base">
                    Proceder al pago
                  </Button>

                  <Button asChild variant="outline" className="w-full border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]">
                    <Link href="/catalog">Continuar comprando</Link>
                  </Button>
                </div>

                <div className="mt-6 text-sm text-gray-500 space-y-1">
                  <p>• Envío gratuito en compras mayores a $3,000 MXN</p>
                  <p>• Devoluciones gratuitas dentro de los primeros 30 días</p>
                  <p>• Pago seguro con encriptación SSL</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
