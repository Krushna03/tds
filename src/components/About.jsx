import React from 'react'
import { AnimatedSection } from './AnimatedSection'
import { Award, Target, Users, Zap } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions.",
    },
    {
      icon: <Target size={32} />,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and quality.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "We work closely with our clients as partners in their digital transformation journey.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "We are committed to delivering exceptional results that exceed expectations.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About TDS Avenue Codeforge
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are a passionate team of developers, designers, and digital strategists dedicated to transforming
                businesses through innovative technology solutions. With years of experience and a commitment to
                excellence, we help companies navigate the digital landscape and achieve their goals.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our mission is to bridge the gap between technology and business success, creating digital experiences
                that not only look great but also drive real results for our clients.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
                  <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
export default About