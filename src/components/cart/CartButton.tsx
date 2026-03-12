"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

export function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex items-center justify-center rounded-full p-2 transition-colors hover:bg-gray-100"
      aria-label={`Carrito de compras (${totalItems} items)`}
    >
      <ShoppingBag className="h-6 w-6 text-gray-700" />
      {totalItems > 0 && (
        <Badge
          variant="destructive"
          className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {totalItems > 9 ? "9+" : totalItems}
        </Badge>
      )}
    </Link>
  );
}
