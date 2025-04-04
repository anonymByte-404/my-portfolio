import React from 'react'
import projects from './data/projects.json'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  live: string
  source: string
}

const Projects: React.FC<{}> = () => {
  return (
    <section className='projects-section'>
      <h1 className='projects-header'>Projects</h1>
      <div className='projects-list'>
        {(projects as Project[]).map((project, index) => (
          <div key={index} className='project-row'>
            <div className='project-image-wrapper'>
              <img
                src={project.image}
                alt={project.title}
                className='project-image'
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.png'
                }}
              />
            </div>
            <div className='project-details'>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className='tech-stack'>
                {project.tech.map((tech, i) => (
                  <span key={i} className='tech-badge'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='project-links'>
                {project.live && (
                  <a href={project.live} target='_blank' rel='noopener noreferrer'>
                    Live Demo
                  </a>
                )}
                {project.source && (
                  <a href={project.source} target='_blank' rel='noopener noreferrer'>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
