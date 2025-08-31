import React from 'react'
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon} from "lucide-react"
import { AnimatedSection } from './AnimatedSection'

const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
})


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = React.useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#services" },
    { name: "Technologies", href: "#process" },
    { name: "Project", href: "#projects" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center py-4 md:py-1">
            <div className="flex items-center">
              <img src="logo-1.png" alt="tds-logo" className='h-[62px]' />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-semibold transition-colors duration-200 font-roboto"
                  >
                    {item.name}
                  </a>
                ))}
                {/* <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button> */}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2 rounded-md text-gray-700 dark:text-gray-300">
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>  
      </AnimatedSection>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header