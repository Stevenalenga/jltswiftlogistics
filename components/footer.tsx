import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/logo.webp"
                alt="JLT Swift Logistics Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="font-bold text-xl">JLT Swift Logistics</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Expeditious freight solutions from USA to Kenya. Shop online and we'll handle the rest.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://wa.me/+12145797184"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  American Stores
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  USA Shopping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Package Consolidation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-gray-500 dark:text-gray-400">641 MAJESTIC OAK LANE, WAXAHACHIE, TEXAS 75165</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:+12145797184" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                +12145797184
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <Link
                  href="mailto:info@jltswiftlogistics.com"
                  className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                >
                  info@jltswiftlogistics.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} JLT Swift Logistics LLC. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
