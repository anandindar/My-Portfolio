import React from 'react'
import { FaTrophy, FaMicrophone, FaUsers } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: "Class Representative",
      period: "2023–26",
      description: "Acted as a bridge between faculty and students, ensuring smooth communication and resolving concerns effectively.",
      icon: <FaUsers />
    },
    {
      title: 'Anchored College Fest "UTKARSH"',
      description: "Hosted and managed multiple stage events, showcasing confidence, audience engagement, and time management skills.",
      icon: <FaMicrophone />
    }
  ]

  const interests = [
    "Public Speaking & Anchoring",
    "Team Collaboration & Event Management",
    "Exploring Food & Restaurant Trends",
    "Data Analysis & Visualization",
    "Machine Learning Research"
  ]

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements & Interests</h2>
      
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.title}</h3>
            {achievement.period && <span className="achievement-period">{achievement.period}</span>}
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>

      <div className="interests-section">
        <h3>Interests</h3>
        <div className="interests-list">
          {interests.map((interest, index) => (
            <div key={index} className="interest-tag">
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
