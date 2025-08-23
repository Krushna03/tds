import { AnimatedSection } from './AnimatedSection'

const TechStack = () => {

  const technologies = [
    {
      name: "React",
      category: "Frontend",
      color: "from-blue-400 to-blue-600",
      icon: "⚛️",
      description: "Modern UI library",
    },
    {
      name: "Next.js",
      category: "Full Stack",
      color: "from-gray-700 to-black",
      icon: "▲",
      description: "Full-stack framework",
    },
    // {
    //   name: "Vue.js",
    //   category: "Frontend",
    //   color: "from-green-400 to-green-600",
    //   icon: "💚",
    //   description: "Progressive framework",
    // },
    {
      name: "Flutter",
      category: "Mobile",
      color: "from-blue-400 to-cyan-400",
      icon: "🦋",
      description: "Cross-platform apps",
    },
    {
      name: "React Native",
      category: "Mobile",
      color: "from-blue-500 to-purple-500",
      icon: "📱",
      description: "Native mobile apps",
    },
    {
      name: "Swift",
      category: "Mobile",
      color: "from-orange-400 to-red-500",
      icon: "🍎",
      description: "iOS development",
    },
    {
      name: "Node.js",
      category: "Backend",
      color: "from-green-500 to-green-600",
      icon: "🟢",
      description: "Server-side runtime",
    },
    {
      name: "Python",
      category: "Backend",
      color: "from-yellow-400 to-blue-500",
      icon: "🐍",
      description: "Versatile language",
    },
    {
      name: "Java",
      category: "Backend",
      color: "from-red-500 to-orange-500",
      icon: "☕",
      description: "Enterprise solutions",
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "from-green-400 to-green-600",
      icon: "🍃",
      description: "NoSQL database",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      color: "from-blue-600 to-indigo-600",
      icon: "🐘",
      description: "Relational database",
    },
    {
      name: "Redis",
      category: "Database",
      color: "from-red-500 to-red-600",
      icon: "🔴",
      description: "In-memory store",
    },
    {
      name: "AWS",
      category: "Cloud",
      color: "from-orange-400 to-orange-600",
      icon: "☁️",
      description: "Cloud platform",
    },
    {
      name: "Docker",
      category: "DevOps",
      color: "from-blue-500 to-blue-700",
      icon: "🐳",
      description: "Containerization",
    },
    // {
    //   name: "Kubernetes",
    //   category: "DevOps",
    //   color: "from-blue-600 to-purple-600",
    //   icon: "⚙️",
    //   description: "Orchestration",
    // },
    { name: "Figma", category: "Design", color: "from-purple-500 to-pink-500", icon: "🎨", description: "Design tool" },
    // {
    //   name: "Adobe XD",
    //   category: "Design",
    //   color: "from-pink-500 to-purple-600",
    //   icon: "🎭",
    //   description: "UX/UI design",
    // },
    {
      name: "TypeScript",
      category: "Language",
      color: "from-blue-600 to-blue-800",
      icon: "📘",
      description: "Typed JavaScript",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 to-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-200 to-orange-200 dark:from-pink-800 to-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 font-roboto">Tech Stack</h2>
            <div className="h-1 bg-blue-700 dark:bg-white w-24 mx-auto mb-3 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left side - Featured technologies */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <AnimatedSection key={tech.name} delay={index * 50}>
                  <div className="group relative bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                    ></div>

                    {/* Decorative corner */}
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${tech.color} opacity-10 rounded-bl-2xl`}
                    ></div>

                    <div className="relative z-10">
                      {/* Icon with gradient background */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <span className="text-2xl">{tech.icon}</span>
                      </div>

                      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                        {tech.name}
                      </h4>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tech.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-500 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {tech.category}
                        </span>
                        <div
                          className={`w-8 h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right side - Stats and info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AnimatedSection delay={200}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Frontend</span>
                      <span className="font-bold">95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Backend</span>
                      <span className="font-bold">90%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Mobile</span>
                      <span className="font-bold">95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>DevOps</span>
                      <span className="font-bold">90%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Technologies</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">18+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Projects</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">100+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">5+ Years</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack