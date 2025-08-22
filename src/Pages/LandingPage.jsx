import React from 'react'
import HeroSection from '../components/hero,'
import Header from '../components/Header'
import Services from '../components/Services'
import Process from '../components/Process'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonial'
import About from '../components/About'
import Team from '../components/Team'
import WhyChooseUs from '../components/WhyChoose'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Process />
      <TechStack />
      <Projects />
      <Testimonial />
      <About />
      <Team />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  )
}

export default LandingPage