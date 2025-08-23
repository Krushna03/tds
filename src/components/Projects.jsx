import React from 'react'
import { AnimatedSection } from './AnimatedSection'
import { ArrowRight, Github } from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced features, real-time inventory management, and seamless payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      stats: { users: "10K+", revenue: "$2M+", rating: "4.9" },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Flutter", "Firebase", "Security", "Biometrics"],
      category: "Mobile App",
      stats: { downloads: "50K+", rating: "4.8", security: "Bank-grade" },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Comprehensive healthcare management system with real-time analytics, patient management, and telemedicine capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "PostgreSQL", "WebRTC"],
      category: "Web Development",
      stats: { patients: "25K+", hospitals: "15", uptime: "99.9%" },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Food Delivery App",
      description:
        "Cross-platform food delivery application with real-time tracking, multiple payment options, and restaurant management system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Maps API", "Payment", "Real-time"],
      category: "Mobile App",
      stats: { orders: "100K+", restaurants: "500+", rating: "4.7" },
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 font-roboto">Our Projects</h2>
            <div className="h-1 bg-blue-700 dark:bg-white w-24 mx-auto mb-3 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 dark:border-gray-700">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500`}
                  ></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* View project button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center">
                      View Project
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="font-bold text-lg text-gray-900 dark:text-white">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <button
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
                    >
                      Live Demo
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={400}>
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-20 rounded-2xl text-white">
              <h3 className="text-5xl font-roboto font-bold mb-3">Ready to start your project?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's create something amazing together. Contact us to discuss your ideas.
              </p>
              <button className="bg-gray-50 text-blue-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Start Your Project
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Projects