import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                "JLT Swift Logistics made shopping from the US so easy. My packages arrived safely and much faster than
                I expected. Great service!"
              </p>
            </CardContent>
            <CardFooter>
              <p className="font-semibold">Sarah K. - Nairobi</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                "I've been using JLT for my business imports for over a year now. Their reliability and customer service
                are unmatched. Highly recommend!"
              </p>
            </CardContent>
            <CardFooter>
              <p className="font-semibold">David M. - Mombasa</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                "The package consolidation service saved me so much on shipping costs. The team was professional and
                kept me updated throughout the process."
              </p>
            </CardContent>
            <CardFooter>
              <p className="font-semibold">Jane W. - Kisumu</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
