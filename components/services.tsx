import { Truck, ShoppingBag, Package, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We provide comprehensive logistics solutions to meet all your shipping needs
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <Card>
            <CardHeader className="pb-2">
              <ShoppingBag className="h-12 w-12 text-primary mb-2" />
              <CardTitle>USA Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Shop from any US online store and we'll handle the purchase and shipping process for you.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Package className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Package Consolidation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We consolidate multiple packages to reduce shipping costs and ensure efficient delivery.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Truck className="h-12 w-12 text-primary mb-2" />
              <CardTitle>International Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Reliable shipping from USA to Kenya with tracking and insurance options.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Clock className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Express Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Expedited shipping options for time-sensitive deliveries to meet your deadlines.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
