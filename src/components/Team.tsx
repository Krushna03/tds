import { AnimatedSection } from './AnimatedSection'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Team = () => {

  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "Founder & CEO",
      bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
      avatar: "/placeholder.svg?height=300&width=300",
      skills: ["Leadership", "Strategy", "Full-Stack"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sarah Chen",
      position: "Lead Designer",
      bio: "Creative designer specializing in user experience and modern interface design.",
      avatar: "/placeholder.svg?height=300&width=300",
      skills: ["UI/UX", "Figma", "Branding"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Michael Rodriguez",
      position: "Senior Developer",
      bio: "Backend specialist with expertise in cloud architecture and database optimization.",
      avatar: "/placeholder.svg?height=300&width=300",
      skills: ["Backend", "Cloud", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Emily Davis",
      position: "Mobile Developer",
      bio: "Mobile app developer with expertise in Flutter and React Native development.",
      avatar: "/placeholder.svg?height=300&width=300",
      skills: ["Flutter", "React Native", "Mobile"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "David Kim",
      position: "DevOps Engineer",
      bio: "Infrastructure specialist focused on automation, monitoring, and scalable deployments.",
      avatar: "/placeholder.svg?height=300&width=300",
      skills: ["Docker", "Kubernetes", "AWS"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Lisa Wang",
      position: "Marketing Specialist",
      bio: "Digital marketing expert with focus on SEO, content strategy, and growth hacking.",
      avatar: "/placeholder.svg?height=300&width=300",
      skills: ["SEO", "Content", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-roboto">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-roboto">
              Our talented team of developers, designers, and strategists who bring your ideas to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 dark:border-gray-700">
                {/* Avatar section */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Social links overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="p-2 bg-white rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-200"
                        >
                          <Twitter size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${member.gradient} text-white text-sm font-semibold rounded-full mb-3`}
                  >
                    {member.position}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{member.name}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Want to join our team?</h3>
              <p className="mb-6 opacity-90">We're always looking for talented individuals to join our growing team.</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
export default Team;