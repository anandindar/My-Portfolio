import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane, FaArrowDown } from 'react-icons/fa'
import './Hero.css'
import profileImage from '../assets/Image/Profile Photo.jpeg'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const calculateRotation = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) / 10
    const rotateY = (e.clientX - centerX) / 10
    
    return { rotateX, rotateY }
  }

  const handleMouseMove = (e) => {
    if (!isHovering) return
    const { rotateX, rotateY } = calculateRotation(e)
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    setIsHovering(false)
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-left-content">
            <div className="greeting-label">HELLO</div>
            
            <h1 className="hero-title">
              I'm <span className="highlight-name">Anand Kumar Gupta</span>
            </h1>
            
            <h2 className="hero-subtitle">
              <span className="accent-word">Data Science</span> & <span className="accent-word">AI</span> Specialist
            </h2>
            
            <p className="hero-description">
              Transforming data into insights. BCA student passionate about leveraging machine learning and analytics to solve real-world challenges and drive meaningful impact.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <span>Get Started</span>
                <FaPaperPlane className="btn-icon" />
              </a>
              <a href="#projects" className="btn btn-outline">Learn More</a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="mailto:anandkumargupta0814@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="social-link-item">
                <FaEnvelope />
              </a>
              <a href="tel:+918933028358" title="Phone" className="social-link-item">
                <FaPhone />
              </a>
              <a href="https://github.com/anandindar" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link-item">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anand-kumar-gupta-26556728a/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link-item">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div 
            className="hero-right-content"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="profile-bg-panel"></div>
            <div className="profile-container">
              <img src={profileImage} alt="Anand Kumar Gupta" className="hero-profile-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <FaArrowDown />
      </div>
    </section>
  )
}

export default Hero