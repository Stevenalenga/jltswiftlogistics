import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Package, Truck, Clock, Shield, FileText, DollarSign, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Comprehensive logistics solutions from the USA to Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="shopping" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="shopping">USA Shopping</TabsTrigger>
                <TabsTrigger value="consolidation">Package Consolidation</TabsTrigger>
                <TabsTrigger value="shipping">International Shipping</TabsTrigger>
                <TabsTrigger value="express">Express Delivery</TabsTrigger>
              </TabsList>
            </div>

            {/* USA Shopping Tab */}
            <TabsContent value="shopping" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">USA Shopping Assistance</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                      Shop from any US online store and we'll handle the purchase and shipping process for you.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Access to thousands of US online stores including Amazon, eBay, Walmart, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Personal shopping assistant to help you find the best deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Assistance with product selection and verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Secure payment processing with competitive exchange rates</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] aspect-square">
                    <Image
                      src="/jltswiftimages/airportplane.webp"
                      alt="USA Shopping Service"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <DollarSign className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Competitive Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We offer competitive pricing for our shopping assistance service with transparent fees and no
                      hidden costs.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Globe className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Access to US-Only Stores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Shop from stores that don't ship internationally or don't accept international payment methods.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Secure Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      All transactions are secure and protected, giving you peace of mind when shopping from overseas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Package Consolidation Tab */}
            <TabsContent value="consolidation" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Package className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">Package Consolidation</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                      We consolidate multiple packages to reduce shipping costs and ensure efficient delivery.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Combine multiple packages into one shipment to save on shipping costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Repackaging services to minimize dimensional weight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Package inspection and verification before shipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Removal of unnecessary packaging materials to reduce weight</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] aspect-square">
                    <Image
                      src="/jltswiftimages/package.jpg"
                      alt="Package Consolidation Service"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <DollarSign className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Cost Savings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Save up to 80% on international shipping costs by consolidating multiple packages into one
                      shipment.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Reduced Risk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Fewer packages means fewer chances of loss or damage during transit and simplified customs
                      clearance.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <FileText className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Simplified Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      One consolidated shipment means less paperwork and easier customs clearance process.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* International Shipping Tab */}
            <TabsContent value="shipping" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Truck className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">International Shipping</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                      Reliable shipping from USA to Kenya with tracking and insurance options.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Air freight and sea freight options available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Door-to-door delivery service throughout Kenya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Full tracking capabilities from pickup to delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Customs clearance assistance and documentation preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Insurance options for valuable shipments</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] aspect-square">
                    <Image
                      src="/jltswiftimages/cargoplane.webp"
                      alt="International Shipping Service"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <Globe className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Global Network</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our established network of shipping partners ensures reliable delivery from the USA to Kenya.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Secure Handling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Your packages are handled with care throughout the shipping process, with proper packaging and
                      security measures.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <FileText className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Customs Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our team has extensive knowledge of customs regulations and will handle all necessary
                      documentation.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Express Delivery Tab */}
            <TabsContent value="express" className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">Express Delivery</h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                      Expedited shipping options for time-sensitive deliveries to meet your deadlines.
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Priority handling and expedited processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Fastest available shipping methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Delivery within 3-5 business days (depending on destination)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Real-time tracking and delivery updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Dedicated customer service for express shipments</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-[500px] aspect-square">
                    <Image
                      src="/jltswiftimages/warehouse.jpg"
                      alt="Express Delivery Service"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <Clock className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Time-Sensitive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Perfect for urgent shipments, gifts, important documents, or time-sensitive business materials.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Priority Handling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Your express packages receive priority treatment at every stage of the shipping process.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <FileText className="h-6 w-6 text-primary mb-2" />
                    <CardTitle>Guaranteed Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We offer delivery guarantees for our express service, with compensation for delays.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Competitive rates for all your shipping needs
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Standard Shipping</CardTitle>
                <CardDescription>For regular shipments without time constraints</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-gray-500 dark:text-gray-400">/kg</span>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>7-14 business days delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Package consolidation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Basic tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Customs clearance assistance</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-primary">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle>Express Shipping</CardTitle>
                <CardDescription className="text-primary-foreground/80">For time-sensitive shipments</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">$25</span>
                  <span className="text-gray-500 dark:text-gray-400">/kg</span>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>3-5 business days delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Priority handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Expedited customs clearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Dedicated customer support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Shopping Assistance</CardTitle>
                <CardDescription>For help with purchasing from US stores</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">10%</span>
                  <span className="text-gray-500 dark:text-gray-400"> of purchase</span>
                </div>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Personal shopping assistant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Product research and verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Access to US-only stores</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
            <p>* Prices are estimates and may vary based on specific requirements and destination.</p>
            <p>Contact us for a personalized quote based on your exact needs.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Answers to common questions about our services
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>How long does shipping from USA to Kenya take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Standard shipping typically takes 7-14 business days, while our express service delivers within 3-5
                  business days. Actual delivery times may vary based on customs clearance and local delivery
                  conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you purchase items for me from any US store?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, we can purchase items from virtually any US online store. If you have a specific store in mind
                  that isn't listed on our website, please contact us and we'll be happy to assist you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do I track my shipment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Once your shipment is processed, you'll receive a tracking number via email. You can use this number
                  to track your package on our website or contact our customer service team for updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are there any restrictions on what I can ship?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, there are restrictions on certain items such as hazardous materials, perishables, and items
                  prohibited by Kenyan customs regulations. Please contact us before shipping any unusual items to
                  confirm eligibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How are shipping costs calculated?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Shipping costs are calculated based on the weight and/or dimensional weight of your package. For large
                  or irregularly shaped items, dimensional weight may apply. We provide transparent pricing with no
                  hidden fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Contact us today for a personalized quote or to learn more about our services.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
