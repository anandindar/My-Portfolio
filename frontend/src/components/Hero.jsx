import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import profilePhoto from '../assets/Image/Profile Photo.jpeg'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Anand Kumar Gupta</span>
            </h1>
            <h2 className="hero-subtitle">Data Science & AI Enthusiast</h2>
            <p className="hero-description">
              BCA student specializing in Data Science and Artificial Intelligence,
              passionate about leveraging data analytics and machine learning to solve real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>

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

          <div className="hero-portrait">
            <div className="portrait-frame">
              <span className="portrait-glow" aria-hidden="true"></span>
              <img src={profilePhoto} alt="Anand Kumar Gupta" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero