import React from 'react'
import { AnimatedSection } from './AnimatedSection'
import { Check } from 'lucide-react'

const WhyChooseUs= () => {
  const reasons = [
    "Proven track record with 100+ successful projects",
    "Expert team with 5+ years of industry experience",
    "Agile development methodology for faster delivery",
    "Comprehensive post-launch support and maintenance",
    "Competitive pricing with transparent communication",
    "Latest technologies and industry best practices",
    "Custom solutions tailored to your specific needs",
    "24/7 customer support and consultation",
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional digital solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <Check className="text-green-600 dark:text-green-400" size={16} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{reason}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;