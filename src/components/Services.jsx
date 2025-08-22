import React from "react"
import { Code, Smartphone, Palette, TrendingUp, ArrowRight } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"


const Services = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js", "Full-Stack Solutions", "E-commerce"],
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 to-cyan-900/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter and React Native for iOS and Android.",
      features: ["Flutter", "React Native", "Native Performance", "Cross-Platform"],
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 to-pink-900/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <Palette size={48} />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      features: ["User Research", "Prototyping", "Design Systems", "Responsive Design"],
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 to-red-900/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to boost your online presence and drive growth.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"],
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 to-emerald-900/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className={`group relative ${service.bgPattern} p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden`}
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center group/item">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200`}
                        ></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Call to action button */}
                  <div className="mt-8">
                    <button
                      className={`group/btn bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center`}
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200"
                        size={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Services;


