import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/shop/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/shop/${product.id}`} className="block">
          <h3 className="font-medium line-clamp-1 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center mt-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
        </div>
        <div className="font-bold">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/shop/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
