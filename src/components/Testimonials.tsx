'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Axtray's AI agents have transformed our customer service operations. Response times are down 60% and customer satisfaction is at an all-time high.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "/testimonials/sarah.jpg"
  },
  {
    quote: "The custom AI solution developed by Axtray has streamlined our workflow and increased productivity by 40%. Their team was professional and delivered beyond our expectations.",
    author: "Michael Chen",
    role: "Operations Director, Innovate Inc",
    image: "/testimonials/michael.jpg"
  },
  {
    quote: "Working with Axtray was a game-changer for our business. Their AI agents have automated complex processes that were previously manual and time-consuming.",
    author: "Emily Rodriguez",
    role: "CEO, FutureTech",
    image: "/testimonials/emily.jpg"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <p className="text-xl text-gray-600 mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0">
                        {/* Placeholder for testimonial image */}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 