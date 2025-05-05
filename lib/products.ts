export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  details: string[]
}

export const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Toys & Games",
  "Books",
  "Sports & Outdoors",
]

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with these premium wireless headphones featuring noise cancellation technology and long battery life.",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
    rating: 4,
    reviews: 128,
    details: [
      "Active noise cancellation",
      "Up to 30 hours of battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls",
      "Comfortable over-ear design",
    ],
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description:
      "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and water resistance.",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
    rating: 5,
    reviews: 94,
    details: [
      "Heart rate and sleep monitoring",
      "Built-in GPS",
      "Water resistant up to 50m",
      "7-day battery life",
      "Compatible with iOS and Android",
    ],
  },
  {
    id: "3",
    name: "Designer Leather Handbag",
    description:
      "Elevate your style with this elegant designer leather handbag, perfect for both casual and formal occasions.",
    price: 299.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    rating: 4,
    reviews: 56,
    details: [
      "Genuine leather construction",
      "Multiple compartments",
      "Adjustable shoulder strap",
      "Gold-tone hardware",
      'Dimensions: 12" x 9" x 4"',
    ],
  },
  {
    id: "4",
    name: "Professional Blender",
    description:
      "A powerful blender for smoothies, soups, and more with multiple speed settings and durable construction.",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Home & Kitchen",
    rating: 5,
    reviews: 212,
    details: [
      "1000-watt motor",
      "Variable speed control",
      "64 oz container",
      "Dishwasher-safe parts",
      "Includes recipe book",
    ],
  },
  {
    id: "5",
    name: "Luxury Skincare Set",
    description: "Pamper your skin with this luxury skincare set featuring cleanser, toner, serum, and moisturizer.",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Beauty & Personal Care",
    rating: 4,
    reviews: 78,
    details: [
      "All-natural ingredients",
      "Suitable for all skin types",
      "Paraben and sulfate-free",
      "Not tested on animals",
      "Made in USA",
    ],
  },
  {
    id: "6",
    name: "Interactive Board Game",
    description: "Bring family and friends together with this fun and interactive board game suitable for all ages.",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Toys & Games",
    rating: 5,
    reviews: 143,
    details: [
      "2-6 players",
      "30-60 minutes play time",
      "Ages 8 and up",
      "Includes game board, cards, and pieces",
      "Strategic gameplay",
    ],
  },
  {
    id: "7",
    name: "Bestselling Novel",
    description: "Dive into this captivating bestselling novel that has taken the literary world by storm.",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Books",
    rating: 4,
    reviews: 256,
    details: [
      "Hardcover edition",
      "New York Times Bestseller",
      "Award-winning author",
      "400 pages",
      "Includes bonus content",
    ],
  },
  {
    id: "8",
    name: "Yoga Mat Set",
    description: "Complete yoga set including premium mat, blocks, and strap for your home workout routine.",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Sports & Outdoors",
    rating: 4,
    reviews: 89,
    details: [
      "Eco-friendly materials",
      "Non-slip surface",
      "Includes carrying strap",
      "6mm thickness for comfort",
      "Available in multiple colors",
    ],
  },
  {
    id: "9",
    name: "Wireless Earbuds",
    description: "Compact wireless earbuds with charging case, perfect for workouts and commuting.",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Electronics",
    rating: 4,
    reviews: 167,
    details: [
      "True wireless design",
      "Up to 20 hours total battery life",
      "Water and sweat resistant",
      "Touch controls",
      "Built-in microphones",
    ],
  },
  {
    id: "10",
    name: "Men's Leather Wallet",
    description: "Sleek and durable leather wallet with RFID blocking technology to protect your cards.",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    rating: 5,
    reviews: 112,
    details: ["Genuine leather", "RFID blocking technology", "Multiple card slots", "Bifold design", "Slim profile"],
  },
  {
    id: "11",
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe to keep your coffee hot for hours.",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Home & Kitchen",
    rating: 4,
    reviews: 198,
    details: ["10-cup capacity", "Programmable timer", "Thermal carafe", "Auto shut-off", "Brew strength control"],
  },
  {
    id: "12",
    name: "Premium Makeup Palette",
    description: "Professional-grade makeup palette with a variety of colors for any look.",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Beauty & Personal Care",
    rating: 4,
    reviews: 87,
    details: [
      "18 highly pigmented shades",
      "Mix of matte and shimmer finishes",
      "Cruelty-free and vegan",
      "Built-in mirror",
      "Long-lasting formula",
    ],
  },
]

export function getFilteredProducts(categories: string[] = [], minPrice = 0, maxPrice = 1000): Product[] {
  return products.filter((product) => {
    const matchesCategory = categories.length === 0 || categories.includes(product.category)
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice
    return matchesCategory && matchesPrice
  })
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(category: string, excludeId: string): Product[] {
  return products.filter((product) => product.category === category && product.id !== excludeId).slice(0, 4)
}
