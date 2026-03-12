"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem } from "@/contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, totalPrice, addItem, removeItem, updateQuantity } = useCart();

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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="relative w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Carrito de compras</h2>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  {items.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">Tu carrito está vacío</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Empieza a agregar productos a tu carrito
                      </p>
                    </div>
                  ) : (
                    <ul className="-my-6 divide-y divide-gray-200">
                      {items.map((item) => (
                        <li key={item.id} className="flex py-6">
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover object-center"
                              sizes="96px"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900 gap-4">
                                <h3>{item.name}</h3>
                                <p>${item.price.toLocaleString("es-MX")}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleDecrement(item.id, item.quantity)}
                                  className="p-1 rounded-full hover:bg-gray-100"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                  onClick={() => handleIncrement(item)}
                                  className="p-1 rounded-full hover:bg-gray-100"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  className="font-medium text-red-600 hover:text-red-500"
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${totalPrice.toLocaleString("es-MX")}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Envío e impuestos calculados al finalizar la compra.
                </p>
                <div className="mt-6">
                  <Button
                    className="w-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                  >
                    Proceder al pago
                  </Button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    o{" "}
                    <button
                      type="button"
                      onClick={onClose}
                      className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                    >
                      Continuar comprando
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
