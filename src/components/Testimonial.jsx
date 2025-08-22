import React, { useEffect, useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content:
        "TDS Avenue Codeforge transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched. The team delivered beyond our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "E-commerce Platform",
      result: "300% increase in sales",
    },
    {
      name: "Michael Chen",
      position: "Founder, InnovateLab",
      company: "InnovateLab",
      content:
        "Working with TDS was a game-changer for our startup. They delivered a world-class mobile app that exceeded our expectations and helped us secure Series A funding.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Mobile Banking App",
      result: "50K+ downloads in 3 months",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      content:
        "The team's creativity and technical skills helped us launch a platform that significantly boosted our user engagement. Their post-launch support has been exceptional.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Healthcare Dashboard",
      result: "85% user satisfaction rate",
    },
    {
      name: "David Kim",
      position: "CTO, FoodieApp",
      company: "FoodieApp",
      content:
        "TDS Avenue Codeforge built our food delivery platform with incredible attention to performance and user experience. The real-time features work flawlessly.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Food Delivery App",
      result: "100K+ orders processed",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, currentTestimonial])

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 to-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200 to-orange-200 dark:from-pink-800 to-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main testimonial content */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current mx-1" size={28} />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-900 dark:text-white mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client info */}
              <div className="flex items-center justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mr-6 border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-xl text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 mb-1">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-semibold">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Project</div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].project}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Result</div>
                  <div className="font-semibold text-green-600 dark:text-green-400">
                    {testimonials[currentTestimonial].result}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Auto-play indicator */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} Auto-slide
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial thumbnails */}
        <AnimatedSection delay={200}>
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-blue-100 dark:bg-blue-900 border-2 border-blue-500"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}


export default Testimonial