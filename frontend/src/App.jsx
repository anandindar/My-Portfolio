import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Set document title and meta description
    document.title = 'Anand Kumar Gupta - Data Science & AI Portfolio'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BCA student specializing in Data Science and AI. Explore my projects, certifications, and skills in machine learning, Python, and data analytics.')
    }

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Header />
      <main role="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App