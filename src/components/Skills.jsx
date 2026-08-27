import React from 'react'

export default function Skills() {
  const skills = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git & GitHub', 'Responsive Design']

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}