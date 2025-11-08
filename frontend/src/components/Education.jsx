import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      specialization: "Data Science and Artificial Intelligence",
      institution: "Babu Banarasi Das University, Lucknow (U.P.)",
      year: "2023-26",
      icon: <FaGraduationCap />
    },
    {
      degree: "Intermediate (12th)",
      institution: "Shri Ramashankar I C Dudahi Kushinagar (U.P.)",
      board: "Board of High School and Intermediate Education Uttar Pradesh",
      year: "2020",
      icon: <FaGraduationCap />
    },
    {
      degree: "High School (10th)",
      institution: "Saraswati Shishu Mandir Hr Sec Sch Gorakhpur (U.P.)",
      board: "Central Board OF Secondary Education",
      year: "2018",
      icon: <FaGraduationCap />
    }
  ]

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{edu.icon}</div>
            <div className="timeline-content">
              <span className="timeline-year">{edu.year}</span>
              <h3>{edu.degree}</h3>
              {edu.specialization && <h4>{edu.specialization}</h4>}
              <p className="institution">{edu.institution}</p>
              {edu.board && <p className="board">{edu.board}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
