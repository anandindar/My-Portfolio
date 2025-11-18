import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Use full backend URL to ensure it works on mobile
  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || 
    'https://my-portfolio-backend-huy6.onrender.com/api/contact'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)
      setStatus({ type: 'pending', message: 'Sending your message…' })

      console.log('Sending to:', contactEndpoint)

      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.message || 'Unable to send your message right now. Please try again in a moment.'
        throw new Error(errorMessage)
      }

      const data = await response.json()
      console.log('Success:', data)

      setStatus({
        type: 'success',
        message: "Thanks for reaching out! I've received your message and will respond soon."
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      
      // Better error messages for different scenarios
      let errorMessage = error.message
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection and try again.'
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out. Please try again.'
      }
      
      setStatus({ type: 'error', message: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
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
                <a href="tel:+918933028358">+91 8933028358</a>
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
                <a href="https://www.linkedin.com/in/anand-kumar-gupta-26556728a/" target="_blank" rel="noopener noreferrer">
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
                <a href="https://github.com/anandindar" target="_blank" rel="noopener noreferrer">
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

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            <FaPaperPlane />
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>

          {status.message && (
            <p className={`form-status form-status-${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact