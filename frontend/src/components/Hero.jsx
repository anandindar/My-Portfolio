import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Text Content */}
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Anand Kumar Gupta</span>
          </h1>
          <h2 className="hero-subtitle">Data Science & AI Enthusiast</h2>
          <p className="hero-description">
            BCA student specializing in Data Science and Artificial Intelligence,
            passionate about leveraging data analytics and machine learning to solve real-world problems.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="mailto:anandkumargupta0814@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+918933028358" title="Phone">
              <FaPhone />
            </a>
            <a href="https://github.com/anandindar" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anand-kumar-gupta-26556728a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero