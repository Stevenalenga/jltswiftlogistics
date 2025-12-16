import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Define the store data
const stores = [
  {
    name: "Amazon",
    description: "The world's largest online marketplace with millions of products across all categories.",
    logo: "/amazon.png?height=50&width=50",
    website: "https://www.amazon.com",
    categories: ["Electronics", "Books", "Home", "Fashion", "Everything"],
  },
  {
    name: "Walmart",
    description: "America's largest retailer offering competitive prices on everyday essentials and more.",
    logo: "/walmart.png?height=50&width=50",
    website: "https://www.walmart.com",
    categories: ["Groceries", "Electronics", "Home", "Fashion", "Toys"],
  },
  {
    name: "Best Buy",
    description: "Leading electronics retailer specializing in computers, appliances, and tech gadgets.",
    logo: "/bestbuy.png?height=80&width=200",
    website: "https://www.bestbuy.com",
    categories: ["Electronics", "Computers", "Appliances", "Gaming", "Smart Home"],
  },
  {
    name: "Target",
    description: "Popular department store with stylish, affordable products for home, fashion, and more.",
    logo: "/target.png?height=80&width=200",
    website: "https://www.target.com",
    categories: ["Home Decor", "Fashion", "Beauty", "Baby", "Furniture"],
  },
  {
    name: "Macy's",
    description: "Iconic department store offering quality clothing, accessories, and home products.",
    logo: "/macys.png?height=80&width=200",
    website: "https://www.macys.com",
    categories: ["Fashion", "Jewelry", "Beauty", "Home", "Shoes"],
  },
  {
    name: "Home Depot",
    description: "America's largest home improvement retailer with tools, materials, and appliances.",
    logo: "/homedepot.png?height=80&width=200",
    website: "https://www.homedepot.com",
    categories: ["Tools", "Home Improvement", "Appliances", "Garden", "Building Materials"],
  },
  {
    name: "Nike",
    description: "Leading athletic apparel and footwear brand with the latest sports technology.",
    logo: "/nike.png?height=80&width=200",
    website: "https://www.nike.com",
    categories: ["Athletic Shoes", "Sportswear", "Training Gear", "Accessories"],
  },
  {
    name: "Apple",
    description: "Innovative technology company offering iPhones, MacBooks, iPads, and accessories.",
    logo: "/apple.png?height=80&width=200",
    website: "https://www.apple.com",
    categories: ["iPhones", "MacBooks", "iPads", "Watches", "Accessories"],
  },
  {
    name: "Sephora",
    description: "Premium beauty retailer with makeup, skincare, fragrance, and haircare products.",
    logo: "/sephora.png?height=80&width=200",
    website: "https://www.sephora.com",
    categories: ["Makeup", "Skincare", "Fragrance", "Haircare", "Beauty Tools"],
  },
  {
    name: "Wayfair",
    description: "Online furniture and home goods retailer with millions of products for every style and budget.",
    logo: "/wayfair.png?height=80&width=200",
    website: "https://www.wayfair.com",
    categories: ["Furniture", "Home Decor", "Kitchen", "Lighting", "Outdoor"],
  },
  {
    name: "Newegg",
    description: "Tech-focused online retailer specializing in computer parts, components, and electronics.",
    logo: "/newegg.png?height=80&width=200",
    website: "https://www.newegg.com",
    categories: ["Computer Parts", "Electronics", "Gaming", "Smart Home", "Software"],
  },
  {
    name: "Nordstrom",
    description: "Luxury department store with high-end fashion, accessories, and beauty products.",
    logo: "/nordstrom.png?height=80&width=200",
    website: "https://www.nordstrom.com",
    categories: ["Designer Fashion", "Shoes", "Handbags", "Beauty", "Accessories"],
  },
]

// Define store categories for filtering
const storeCategories = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports",
  "Toys",
  "Books",
  "Furniture",
  "Appliances",
]

export default function StoresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
     <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shop from American Stores</h1>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Browse popular US retailers and we'll handle the shipping to Kenya
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  <ShoppingBag className="h-5 w-5" />
                  Get Shopping Assistance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Shopping from US stores is easy with JLT Swift Logistics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold">Choose Your Store</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Browse any US online store and select the items you want to purchase.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold">Send Us the Details</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Share the product links with us, and we'll handle the purchase on your behalf.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold">Receive in Kenya</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We'll ship your items to Kenya and deliver them directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Stores Section */}
     <section className="w-full py-12 md:py-24 bg-background dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular American Stores</h2>
              <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Explore these popular US retailers and find exactly what you're looking for
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={store.logo || "/placeholder.svg"}
                      alt={`${store.name} logo`}
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="mt-2">{store.name}</CardTitle>
                  <CardDescription>{store.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    {store.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={store.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Visit Store
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Services Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Shopping Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer comprehensive shopping assistance to make your US shopping experience seamless
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Personal Shopping Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team can help you find specific products, compare prices, and make recommendations based on your
                  preferences. We'll handle the entire shopping process for you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We handle payments for your US purchases, eliminating the need for international credit cards or
                  dealing with stores that don't accept international payments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Package Consolidation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Shop from multiple US stores and we'll consolidate all your purchases into one shipment, saving you
                  money on international shipping costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customs Clearance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We handle all customs documentation and clearance procedures, ensuring your packages arrive in Kenya
                  without delays or complications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Shopping?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Contact us today to get started with your US shopping experience. We'll help you shop from any American
                store and deliver your purchases to Kenya.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
