import React, { useState, useEffect } from 'react'
import { FaCertificate, FaTimes, FaFilePdf } from 'react-icons/fa'
import './Certifications.css'

// Import certificate images
import ibmCognos from '../assets/Image/ibm-cognos-analytics-v11-1-x-reporting-essentials.png'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  // Simple scroll lock when modal opens
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedCert])

  const certifications = [
    {
      title: "Predictive Modeling Fundamentals I",
      issuer: "IBM Skills Network",
      date: "Sep 2025",
      file: new URL('../assets/Image/Anand_32_Data_Science.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Advanced techniques for building and validating predictive models using statistical methods and machine learning algorithms."
    },
    {
      title: "Data Science 101",
      issuer: "IBM",
      date: "Sep 2025",
      file: new URL('../assets/Image/Anand_32_No_Sql.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Comprehensive introduction to data science concepts, tools, and methodologies for data-driven decision making."
    },
    {
      title: "NoSQL and DBaaS 101",
      issuer: "IBM",
      date: "Sep 2025",
      file: new URL('../assets/Image/IBM DB0151EN Certificate _ IBM SkillsBuild.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Fundamentals of NoSQL databases and Database as a Service platforms including MongoDB, Cassandra, and cloud-based solutions."
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "July 2025",
      file: new URL('../assets/Image/deloitte.pdf', import.meta.url).href,
      type: 'pdf',
      details: "Practical tasks: Data analysis, Forensic technology",
      description: "Real-world data analytics challenges involving data exploration, visualization, and business intelligence report generation."
    },
    {
      title: "IBM Cognos Analytics V11.1.x Reporting Essentials",
      issuer: "IBM Data and AI",
      date: "Sep 2024",
      file: ibmCognos,
      type: 'image',
      description: "Master IBM Cognos Analytics platform for creating interactive dashboards and comprehensive business reports."
    },
    {
      title: "Mobile Application Development",
      issuer: "Babu Banarasi Das University",
      date: "Feb 2024 – July 2024",
      file: new URL('../assets/Image/MAD_ANAND KUMAR GUPTA (1).pdf', import.meta.url).href,
      type: 'pdf',
      description: "Complete mobile app development course covering both iOS and Android platforms with hands-on project experience."
    },
    {
      title: "IBM Cloud Essentials",
      issuer: "IBM Developer Skills Network",
      date: "May 2024",
      file: new URL('../assets/Image/IBM_Cloud_Essentials_Badge20240508-7-rcr4z1.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Comprehensive guide to IBM Cloud infrastructure, services, and deployment best practices for modern applications."
    },
    {
      title: "IBM Data Science Foundations – Level 1",
      issuer: "IBM",
      date: "Nov 2023",
      file: new URL('../assets/Image/Data_Science_Foundations___Level_1_Badge20231107-29-sgwurs.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Foundational concepts in data science including Python programming, data manipulation, and exploratory data analysis."
    },
    {
      title: "IBM Cognos Analytics V11.1.x Reporting Essentials Badge",
      issuer: "IBM",
      date: "Sep 2024",
      file: new URL('../assets/Image/IBM_Cognos_Analytics_V11_1_x_Reporting_Essentials_Badge20240925-7-zlpx2m.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Professional badge certification for advanced IBM Cognos Analytics reporting and dashboard creation."
    },
    {
      title: "Python Development Certificate",
      issuer: "Babu Banarasi Das University",
      date: "2024",
      file: new URL('../assets/Image/IBM PY0101EN Certificate _ Babu Banarasi Das University.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Professional certification in Python development covering core programming concepts and practical applications."
    },
    {
      title: "AWS Cloud Essentials",
      issuer: "AWS Training",
      date: "2024",
      file: new URL('../assets/Image/AWS_cloud.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Comprehensive AWS cloud services training covering EC2, S3, Lambda, and other core AWS services."
    },
    {
      title: "AWS Certificate",
      issuer: "Amazon Web Services",
      date: "2024",
      file: new URL('../assets/Image/AWS_Certificate.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Amazon Web Services professional certification validating cloud architecture and deployment expertise."
    },
    {
      title: "Google Cloud Certificate",
      issuer: "Google Cloud",
      date: "2024",
      file: new URL('../assets/Image/Google_Certificate.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Google Cloud Platform professional certification for cloud infrastructure and services management."
    },
    {
      title: "Microsoft Power BI",
      issuer: "Microsoft",
      date: "2024",
      file: new URL('../assets/Image/Microsoft_PoweBI.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Advanced Power BI certification for business intelligence dashboards and data visualization."
    },
    {
      title: "MS Excel Expert",
      issuer: "Microsoft",
      date: "2024",
      file: new URL('../assets/Image/MS-Excel.pdf', import.meta.url).href,
      type: 'pdf',
      description: "Expert-level Microsoft Excel certification covering advanced functions, pivot tables, and data analysis."
    }
  ]

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications & Courses</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setSelectedCert(cert)}
          >
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            {cert.details && <p className="cert-details">{cert.details}</p>}
            <p className="cert-click-hint">Click to view details</p>
          </div>
        ))}
      </div>

      {/* Modal for Certificate Details */}
      {selectedCert && (
        <div 
          className="cert-modal-overlay" 
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="cert-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
            >
              <FaTimes />
            </button>
            
            <div className="cert-modal-content">
              {/* Left side - Certificate Preview */}
              <div className="cert-modal-left">
                {selectedCert.type === 'image' ? (
                  <img 
                    src={selectedCert.file} 
                    alt={selectedCert.title}
                    className="cert-preview-image"
                  />
                ) : selectedCert.type === 'pdf' ? (
                  <div className="cert-pdf-preview">
                    <FaFilePdf className="pdf-icon" />
                    <p>PDF Certificate</p>
                    <a 
                      href={selectedCert.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pdf-download-btn"
                    >
                      Open PDF
                    </a>
                  </div>
                ) : (
                  <div className="cert-modal-icon">
                    <FaCertificate />
                  </div>
                )}
              </div>

              {/* Right side - Description and Details */}
              <div className="cert-modal-right">
                <div>
                  <h2>{selectedCert.title}</h2>
                  <p className="modal-issuer">{selectedCert.issuer}</p>
                  <p className="modal-date">{selectedCert.date}</p>
                  
                  <h3>About This Certification</h3>
                  <p className="modal-description">
                    {selectedCert.description}
                  </p>
                  {selectedCert.details && (
                    <div className="modal-extra-details">
                      <h4>Key Details</h4>
                      <p>{selectedCert.details}</p>
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  {selectedCert.type === 'pdf' && (
                    <a 
                      href={selectedCert.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-btn modal-btn-primary"
                    >
                      Download PDF
                    </a>
                  )}
                  <button className="modal-btn" onClick={() => setSelectedCert(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications
