"use client"

import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/shop/product-card"
import { getFilteredProducts } from "@/lib/products"

export default function ProductGrid() {
  const searchParams = useSearchParams()

  const categoryParam = searchParams.get("category")
  const minPriceParam = searchParams.get("minPrice")
  const maxPriceParam = searchParams.get("maxPrice")

  const categories = categoryParam ? categoryParam.split(",") : []
  const minPrice = minPriceParam ? Number.parseInt(minPriceParam) : 0
  const maxPrice = maxPriceParam ? Number.parseInt(maxPriceParam) : 1000

  const products = getFilteredProducts(categories, minPrice, maxPrice)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {products.length} {products.length === 1 ? "Product" : "Products"}
        </h2>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
