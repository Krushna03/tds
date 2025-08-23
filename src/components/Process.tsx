import { AnimatedSection } from './AnimatedSection';

const Process = () => {
  
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business goals, target audience, and project requirements.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "We create a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Design",
      description: "Our design team crafts beautiful, user-friendly interfaces that align with your brand identity.",
    },
    {
      number: "04",
      title: "Development",
      description: "We build robust, scalable solutions using cutting-edge technologies and best practices.",
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly across all devices and platforms.",
    },
    {
      number: "06",
      title: "Launch",
      description: "We deploy your solution and provide ongoing support to ensure continued success.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 font-roboto">Our Process</h2>
            <div className="h-1 bg-blue-700 dark:bg-white w-24 mx-auto mb-3 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-roboto">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800 hidden lg:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className="flex-1 lg:pr-8">
                    <div
                      className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                    >
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{step.number}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 relative z-10"></div>

                  <div className="flex-1 lg:pl-8"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process;