"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(error => {
        console.error("Autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-lg">SOULVIBE</div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="hover:text-gray-300">Home</Link>
          <Link href="#" className="hover:text-gray-300">About Us</Link>
          <Link href="#" className="hover:text-gray-300">Technology</Link>
          <Link href="#" className="hover:text-gray-300">Business & Product</Link>
        </nav>
        <Link href="#" className="hover:text-gray-300">Sign in</Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            GOOD MUSIC<br />HEALS THE SOULS.
          </h1>
          <p className="text-gray-300 max-w-md">
            The easy way to enjoy music and experience even pure sound, with smart listening technology that
            automatically personalizes your experience.
          </p>
          <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black transition">
            Buy Now
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="w-[600px] h-[600px] rounded-xl overflow-hidden shadow-lg">
            <video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <Image
            src="/Headphones.jpg?height=500&width=400"
            width={400}
            height={500}
            alt="Person wearing headphones"
            className="mx-auto grayscale contrast-125"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            HIGH QUALITY<br />PREMIUM SOUND
          </h2>
          <p className="text-gray-300">
            Powerful 40mm drivers, with Liquid Crystal Polymer diaphragms, make the headphones perfect for handling
            heavy beats and can reproduce a full range of frequencies up to 40KHZ.
          </p>
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div>
                <div className="font-bold">40 mm</div>
                <div className="text-sm text-gray-400">Driver unit</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div>
                <div className="font-bold">1.2 m</div>
                <div className="text-sm text-gray-400">Gold plated audio jack</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div>
                <div className="font-bold">30 hrs</div>
                <div className="text-sm text-gray-400">Battery Life</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div>
                <div className="font-bold">Version 5.0</div>
                <div className="text-sm text-gray-400">Bluetooth version</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Product Spotlight
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="relative group">
              <Image
                src="/face-headphone.jpg?height=300&width=400"
                width={400}
                height={300}
                alt="Futuristic headphone visualization"
                className="mx-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">SoulVibe WH-1000X</h3>
              <p className="text-lg text-gray-300 mb-4">
                Wireless Noise Cancelling Headphones
              </p>
              <p className="text-3xl font-bold text-purple-400 mb-4">₹ 3499.73</p>
              <p className="text-gray-400 mb-6">
                Experience unparalleled sound quality with industry-leading noise cancellation. Perfect for music lovers and professionals alike, the Sony WH-1000XM4 offers up to 30 hours of battery life, touch controls, and exceptional comfort for all-day wear.
              </p>
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/hero-image.jpeg?height=192&width=192"
                  width={192}
                  height={192}
                  alt="Founder 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Mohammed Suhaib S</h3>
              <p className="text-gray-400">Founder & CEO</p>
              <p className="text-gray-300 mt-2 max-w-xs">
                Suhaib is passionate about revolutionizing audio experiences with innovative technology.
              </p>
            </div>
            {/* Founder 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src="/founder2.jpeg?height=192&width=192"
                  width={192}
                  height={192}
                  alt="Founder 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Mohammed Fawaz Sheriff</h3>
              <p className="text-gray-400">Co-Founder & CTO</p>
              <p className="text-gray-300 mt-2 max-w-xs">
                Fawaz drives the technical vision, ensuring top-tier sound quality and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}