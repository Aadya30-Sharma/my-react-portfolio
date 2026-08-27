import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Campus Event Hub",
      description: "A platform for students to find and register for upcoming club events.",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive web app that fetches live weather data using a REST API.",
      link: "#"
    },
    {
      title: "Task Manager",
      description: "A sleek to-do list application with local storage persistence.",
      link: "#"
    }
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Code →</a>
          </div>
        ))}
      </div>
    </section>
  )
}