import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import AddToCartButton from "@/components/shop/add-to-cart-button"
import RelatedProducts from "@/components/shop/related-products"
import { getProductById, getRelatedProducts } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.category, product.id)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:py-12">
        <Link href="/shop" className="inline-flex items-center text-sm font-medium text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <Link href={`/shop?category=${product.category}`} className="text-sm text-primary">
                {product.category}
              </Link>
            </div>

            <h1 className="text-3xl font-bold">{product.name}</h1>

            <div className="flex items-center mt-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <div className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</div>

            <p className="text-gray-500 dark:text-gray-400 mb-6">{product.description}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-primary mr-2" />
                <span>Ships from USA to Kenya in 7-14 days</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-primary mr-2" />
                <span>Authentic products with warranty</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-primary mr-2" />
                <span>30-day return policy</span>
              </div>
            </div>

            <AddToCartButton product={product} />

            <Separator className="my-8" />

            <div className="space-y-4">
              <h3 className="font-medium">Product Details</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-500 dark:text-gray-400">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  )
}
