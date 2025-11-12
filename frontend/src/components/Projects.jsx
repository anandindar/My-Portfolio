import React from 'react'
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt, FaDatabase, FaChartBar } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Built a predictive model using IBM SPSS Modeler to identify customers likely to discontinue services. Implemented decision trees and analytics techniques to support targeted retention strategies.",
      icon: <FaDatabase />,
      technologies: ["IBM SPSS Modeler", "Decision Trees", "Predictive Analytics", "Data Mining"],
      highlights: [
        "Predictive accuracy of 85%+",
        "Identified key churn factors",
        "Enabled targeted retention campaigns",
        "Reduced customer churn by 25%"
      ],
      category: "Machine Learning",
      color: "blue"
    },
    {
      title: "Netflix Movie Data Analysis",
      description: "Analyzed Netflix movie and TV show dataset to uncover insights about content distribution, genre popularity, and release trends. Created comprehensive visual dashboards using Python.",
      icon: <FaChartBar />,
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      highlights: [
        "Analyzed 8000+ movies and shows",
        "Identified trending genres",
        "Created interactive visualizations",
        "Country-wise content analysis"
      ],
      category: "Data Analytics",
      color: "purple"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Developed an interactive dashboard for visualizing complex datasets with real-time filtering and drill-down capabilities. Used Power BI and Python for data processing.",
      icon: <FaProjectDiagram />,
      technologies: ["Power BI", "Python", "SQL", "Excel"],
      highlights: [
        "Real-time data updates",
        "Interactive filters and slicers",
        "Custom DAX calculations",
        "Mobile-responsive design"
      ],
      category: "Business Intelligence",
      color: "green"
    },
    {
      title: "IPL Dashboard Analytics",
      description: "Designed an end-to-end Power BI dashboard that highlights Indian Premier League team and player performance trends to support quick insights for stakeholders.",
      icon: <FaChartBar />,
      technologies: ["Power BI", "DAX", "Data Modeling", "Power Query"],
      highlights: [
        "Consolidated multi-season IPL datasets into a clean model",
        "Built interactive match, team, and player slicers",
        "Delivered insights via the shared IPL Dashboard.pbix report",
        "Automated refresh ready for future seasons"
      ],
      category: "Business Intelligence",
      color: "orange"
    }
    ,
    {
      title: "Superstore Sales Analysis",
      description: "Performed end-to-end analysis on the Superstore dataset to surface sales, profit, and customer insights. Built interactive dashboards for executive and operational use.",
      icon: <FaProjectDiagram />,
      technologies: ["Tableau", "SQL", "Excel", "Power BI"],
      highlights: [
        "Created sales & profit heatmaps across regions and product categories",
        "Built customer segmentation using RFM analysis",
        "Designed an executive dashboard with key KPIs and trend analysis",
        "Optimized visualizations for drill-down and export"
      ],
      category: "Data Analytics",
      color: "blue"
    }
  ]

  const getColorClass = (color) => {
    const colors = {
      blue: 'project-blue',
      purple: 'project-purple',
      green: 'project-green',
      orange: 'project-orange'
    }
    return colors[color] || 'project-blue'
  }

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-badge">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore my recent work in data science, machine learning, and analytics
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${getColorClass(project.color)}`} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="project-header">
              <div className="project-icon-wrapper">
                <div className="project-icon">
                  {project.icon}
                </div>
              </div>
              <span className="project-category">{project.category}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-highlights">
              <h4>Key Achievements:</h4>
              <ul>
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>
                    <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <button className="btn-project btn-primary">
                <FaExternalLinkAlt />
                View Details
              </button>
              <button className="btn-project btn-secondary">
                <FaGithub />
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects