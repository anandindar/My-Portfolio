import React from 'react'
import { FaDatabase, FaChartBar, FaCode, FaBrain, FaServer } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'R Programming', level: 75 }
      ]
    },
    {
      title: 'Data Science & ML',
      icon: <FaBrain />,
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 75 },
        { name: 'Natural Language Processing', level: 70 },
        { name: 'Predictive Modeling', level: 80 }
      ]
    },
    {
      title: 'Data Analysis',
      icon: <FaChartBar />,
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'TensorFlow', level: 70 }
      ]
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 }
      ]
    },
    {
      title: 'Visualization Tools',
      icon: <FaChartBar />,
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 80 }
      ]
    },
    {
      title: 'Big Data',
      icon: <FaServer />,
      skills: [
        { name: 'Hadoop', level: 70 },
        { name: 'Apache Spark', level: 65 },
        { name: 'Hive', level: 60 }
      ]
    }
  ]

  const tools = [
    'Jupyter Notebook',
    'Git & GitHub',
    'VS Code',
    'MS Word',
    'IBM SPSS',
    'IBM Cognos',
    'Excel',
    'Google Colab',
    'Docker'
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-name-level">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tools-section">
        <h3>Tools & Technologies</h3>
        <div className="tools-list">
          {tools.map((tool, index) => (
            <div key={index} className="tool-tag">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills