import React, { useEffect, useState, useRef } from 'react'
import projects from './data/projects.json'
import defaultPlaceholder from '../../assets/images/placeholder.png'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  live: string
  source: string
  date?: string
  dateFinished?: string
  tags?: string[]
}

interface ProjectsProps {
  placeholder?: string
}

const Projects: React.FC<ProjectsProps> = ({ placeholder = defaultPlaceholder }) => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false))
  const [fadeVisible, setFadeVisible] = useState(true)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const sortedProjects: Project[] = (projects as Project[]).sort((a, b) => {
    return Date.parse(b.date || '') - Date.parse(a.date || '')
  })

  const formatDate = (dateString?: string): string => {
    const date = dateString ? new Date(dateString) : new Date()
    const year = date.getFullYear().toString().slice(-2)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const truncateDescription = (description: string, maxLength: number = 150): string => {
    if (description.length <= maxLength) return description
    return description.slice(0, maxLength) + '...'
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'))

        setVisibleProjects((prev) => {
          const newVisible = [...prev]
          newVisible[index] = entry.isIntersecting
          return newVisible
        })
      })
    })

    const projectElements = document.querySelectorAll('.project-wrapper')
    projectElements.forEach((element, index) => {
      element.setAttribute('data-index', index.toString())
      observer.observe(element)
    })

    return () => {
      projectElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [sortedProjects])

  useEffect(() => {
    const handleScroll = (): void => {
      const container = containerRef.current
      if (!container) return

      const { top, bottom } = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      setFadeVisible(top < 0 && bottom > windowHeight)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDescription = (index: number): void => {
    setExpandedProject((prev) => (prev === index ? null : index))
  }

  return (
    <section className='projects-section'>
      <h1 className='projects-header'>Projects</h1>
      <div className={`projects-fade-top ${fadeVisible ? 'visible' : ''}`} />
      <div className={`projects-fade-bottom ${fadeVisible ? 'visible' : ''}`} />
      <div className='projects-timeline-container' ref={containerRef}>
        <div className='projects-list'>
          {sortedProjects.map((project, index) => (
            <div key={index} className={`project-wrapper fade-in ${visibleProjects[index] ? 'visible' : ''}`}>
              <div className='timeline-marker'>
                <div className='timeline-dot' />
                <span className='timeline-date'>
                  {project.date || formatDate(project.date)} - {project.dateFinished || 'Present'}
                </span>
              </div>
              <div className='project-row'>
                <div className='project-image-wrapper'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='project-image'
                    onError={(e) => {
                      e.currentTarget.src = placeholder
                    }}
                  />
                </div>
                <div className='project-details'>
                  <h2>{project.title}</h2>
                  <p onClick={() => toggleDescription(index)} style={{ cursor: 'pointer' }}>
                    {expandedProject === index ? project.description : truncateDescription(project.description)}
                  </p>
                  <div className='tech-stack'>
                    {project.tech.sort().map((tech, i) => (
                      <span key={i} className='tech-badge'>{tech}</span>
                    ))}
                  </div>
                  <div className='tags'>
                    {project.tags && project.tags.map((tag, i) => (
                      <span key={i} className='tag-badge'>{tag}</span>
                    ))}
                  </div>
                  <div className='project-links'>
                    {project.live && <a href={project.live} target='_blank' rel='noopener noreferrer'>Live Demo</a>}
                    {project.source && <a href={project.source} target='_blank' rel='noopener noreferrer'>Source Code</a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
