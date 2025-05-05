import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About JLT Swift Logistics</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your trusted partner for expeditious freight solutions between the USA and Kenya.
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                JLT Swift Logistics LLC was founded with a simple mission: to provide reliable, efficient, and
                affordable shipping solutions for individuals and businesses looking to shop in the USA and ship to
                Kenya.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                With years of experience in international logistics, our team understands the challenges of cross-border
                shipping and has developed streamlined processes to ensure your packages arrive safely and on time.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="About JLT Swift Logistics"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The principles that guide our business
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                We deliver on our promises, ensuring your packages arrive safely and on time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Clear communication and honest pricing with no hidden fees or surprises.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Your satisfaction is our priority, and we go the extra mile to ensure it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What sets JLT Swift Logistics apart
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold">Experienced Team</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our logistics experts have years of experience in international shipping and customs procedures.
              </p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold">Competitive Rates</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We offer some of the most competitive shipping rates in the industry without compromising on service
                quality.
              </p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold">End-to-End Service</h3>
              <p className="text-gray-500 dark:text-gray-400">
                From shopping assistance to final delivery, we handle every step of the shipping process.
              </p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our expedited shipping options ensure your packages arrive in Kenya in the shortest possible time.
              </p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold">Package Tracking</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Track your shipments at every stage of the journey for complete peace of mind.
              </p>
            </div>
            <div className="flex flex-col space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
              <h3 className="text-xl font-bold">Dedicated Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our customer service team is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Experience our expeditious freight solutions today. Let us handle your shipping needs from the USA to
                Kenya.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
