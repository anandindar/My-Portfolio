import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    alert('Message sent! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-badge">Let's Connect</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-info-title">Contact Information</h3>
          <p className="contact-info-subtitle">
            Feel free to reach out through any of these channels
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">
                <FaEnvelope />
              </div>
              <div className="contact-item-content">
                <h4>Email</h4>
                <a href="mailto:anandkumargupta0814@gmail.com">anandkumargupta0814@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaPhone />
              </div>
              <div className="contact-item-content">
                <h4>Phone</h4>
                <a href="tel:8933028358">+91 8933028358</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-item-content">
                <h4>Location</h4>
                <p>Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaLinkedin />
              </div>
              <div className="contact-item-content">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/anand-kumar-gupta" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaGithub />
              </div>
              <div className="contact-item-content">
                <h4>GitHub</h4>
                <a href="https://anandindar.github.io" target="_blank" rel="noopener noreferrer">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send Me a Message</h3>
          
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact