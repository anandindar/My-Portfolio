import React, { useState, useEffect } from 'react'
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaProjectDiagram,
  FaTrophy,
  FaEnvelope
} from 'react-icons/fa'
import './Header.css'

const MENU_ITEMS = [
  { id: 'home', label: 'Home', href: '#home', icon: <FaHome /> },
  { id: 'about', label: 'About', href: '#about', icon: <FaUser /> },
  { id: 'education', label: 'Education', href: '#education', icon: <FaGraduationCap /> },
  { id: 'skills', label: 'Skills', href: '#skills', icon: <FaCode /> },
  { id: 'certifications', label: 'Certifications', href: '#certifications', icon: <FaCertificate /> },
  { id: 'projects', label: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { id: 'achievements', label: 'Achievements', href: '#achievements', icon: <FaTrophy /> },
  { id: 'contact', label: 'Contact', href: '#contact', icon: <FaEnvelope /> }
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(MENU_ITEMS[0].id)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0
        let activeId = null
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            activeId = entry.target.id
          }
        })
        
        if (activeId) {
          setActiveSection(activeId)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    MENU_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])



  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <a href="#home" className="logo" onClick={handleMenuClick}>
          <span className="logo-mark">AG</span>
          <div className="logo-text-group">
            <span className="logo-title">Anand Kumar Gupta</span>
            <span className="logo-subtitle">Data Science &amp; AI Enthusiast</span>
          </div>
        </a>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {MENU_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={handleMenuClick}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="header-right">
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <div className="mobile-overlay" onClick={handleMenuClick}></div>}
    </header>
  )
}

export default Header