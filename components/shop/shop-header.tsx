import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShoppingCart from "@/components/shop/shopping-cart"

export default function ShopHeader() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop USA Products</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse and purchase products from the USA with delivery to Kenya
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="gap-2">
              <ShoppingBag className="h-5 w-5" />
              Start Shopping
            </Button>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </section>
  )
}
