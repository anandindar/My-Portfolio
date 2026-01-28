import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am an enthusiastic BCA student specializing in Data Science and Artificial Intelligence 
            at Babu Banarasi Das University, Lucknow. With a strong foundation in Python programming, 
            data visualization, and machine learning, I am passionate about turning data into actionable insights.
          </p>
          <p>
            My academic journey and practical experience through various certifications from IBM and Deloitte 
            have equipped me with skills in predictive modeling, data analytics, and business intelligence tools. 
            I thrive in collaborative environments and enjoy solving complex problems through data-driven approaches.
          </p>
          <p>
            Beyond academics, I have served as Class Representative and anchored college events, 
            which has honed my leadership, communication, and team management skills.
          </p>
        </div>

        <div className="currently-doing">
          <h3><strong>Currently Working</strong></h3>
          <p>Internship / Industrial Training Program in Data Analytics in NIELIT Lucknow</p>
        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <h3>15+</h3>
            <p>Certifications</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About