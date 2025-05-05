import { Suspense } from "react"
import ProductGrid from "@/components/shop/product-grid"
import ShopFilters from "@/components/shop/shop-filters"
import ShopHeader from "@/components/shop/shop-header"
import { Skeleton } from "@/components/ui/skeleton"

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ShopHeader />

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 lg:w-1/5">
              <ShopFilters />
            </div>
            <div className="md:w-3/4 lg:w-4/5">
              <Suspense fallback={<ProductGridSkeleton />}>
                <ProductGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/3" />
              <div className="pt-2">
                <Skeleton className="h-9 w-full" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
