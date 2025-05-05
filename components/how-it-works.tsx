import { CheckCircle2 } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Simple steps to get your packages from the USA to Kenya
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold">Shop Online</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Browse and purchase items from any US online store or let us shop for you.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold">We Receive & Process</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Your packages arrive at our US warehouse where we inspect, consolidate, and prepare them for shipping.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white dark:bg-gray-950">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold">Delivery to Kenya</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              We ship your packages to Kenya and deliver them directly to your specified destination.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Fast delivery times</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Package tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Secure handling</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Customs clearance</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Insurance options</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Competitive rates</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
