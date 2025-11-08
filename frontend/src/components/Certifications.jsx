import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: "Predictive Modeling Fundamentals I",
      issuer: "IBM Skills Network",
      date: "Sep 2025"
    },
    {
      title: "Data Science 101",
      issuer: "IBM",
      date: "Sep 2025"
    },
    {
      title: "NoSQL and DBaaS 101",
      issuer: "IBM",
      date: "Sep 2025"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "July 2025",
      details: "Practical tasks: Data analysis, Forensic technology"
    },
    {
      title: "IBM Cognos Analytics V11.1.x Reporting Essentials",
      issuer: "IBM Data and AI",
      date: "Sep 2024"
    },
    {
      title: "Mobile Application Development",
      issuer: "Babu Banarasi Das University",
      date: "Feb 2024 – July 2024"
    },
    {
      title: "IBM Cloud Essentials",
      issuer: "IBM Developer Skills Network",
      date: "May 2024"
    },
    {
      title: "IBM Data Science Foundations – Level 1",
      issuer: "IBM",
      date: "Nov 2023"
    },
    {
      title: "Course on Computer Concepts (CCC)",
      issuer: "NIELIT",
      date: "Nov 2021"
    },
    {
      title: "Diploma in Computer Applications (DCA)",
      issuer: "Professional Institute",
      date: "Mar 2021 – Sep 2021"
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications & Courses</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            {cert.details && <p className="cert-details">{cert.details}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
