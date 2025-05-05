"use client"

import { useState } from "react"
import { ShoppingCart, Check, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()
  const { addToCart } = useCart()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simulate adding to cart
    setTimeout(() => {
      addToCart(product, quantity)

      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} has been added to your cart.`,
      })

      setIsAdding(false)
    }, 600)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <div className="flex-1 border-y border-input h-10 flex items-center justify-center px-4 text-center">
          {quantity}
        </div>
        <Button variant="outline" size="icon" onClick={increaseQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>

      <Button className="w-full" size="lg" onClick={handleAddToCart} disabled={isAdding}>
        {isAdding ? <Check className="mr-2 h-5 w-5" /> : <ShoppingCart className="mr-2 h-5 w-5" />}
        {isAdding ? "Added to Cart" : "Add to Cart"}
      </Button>
    </div>
  )
}
