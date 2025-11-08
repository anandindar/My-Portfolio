import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaHome, FaUser, FaGraduationCap, FaCode, FaCertificate, FaProjectDiagram, FaTrophy, FaEnvelope } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'education', 'skills', 'certifications', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
    { name: 'Skills', href: '#skills', icon: <FaCode /> },
    { name: 'Certifications', href: '#certifications', icon: <FaCertificate /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Achievements', href: '#achievements', icon: <FaTrophy /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
  ]

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={handleMenuClick}>
          <span className="logo-text">Anand</span>
          <span className="logo-highlight">Kumar Gupta</span>
        </a>
        
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`nav-link ${activeSection === item.name.toLowerCase() ? 'active' : ''}`}
              onClick={handleMenuClick}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="header-right">
          <a href="#contact" className="btn-hire" onClick={handleMenuClick}>
            Hire Me
          </a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Header