import React from "react"
import { ArrowIcon2 } from '../components/icons/SvgIcons'

interface ProjectProps {
  title: string
  description: string
  image?: string
  tags?: { icon?: React.ReactNode; label: string }[]
}

const Projects: React.FC<ProjectProps> = ({ title, description, image, tags = [] }) => {
  return (
    <div className="project">
      <div className="project-preview-image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="project-detail">
        <div className="project-title">
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag.icon && <span className="tag-icon">{tag.icon}</span>}
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Project: React.FC = () => {
  return (
    <section id="project">
      <div className="legend">
        <h2>Projects</h2>
      </div>
      <p>Here are some of the projects I've built, showcasing my skills in development and problem-solving.
        Each project reflects my passion for coding and my commitment to creating useful tools.</p>
      <div className="select-style">
        <button>
          <span>View More</span>
          <ArrowIcon2
            width={20}
            height={20}
            className="arrow"
          />
        </button>
        <button>Play Interactive Demos</button>
      </div>
      <div className="project-container">
        <Projects
          title="NO.1 Project"
          description="This is a short description of the project."
          image="https://via.placeholder.com/150"
          tags={[
            { label: "React" },
            { label: "SCSS" },
            { label: "TypeScript" }
          ]}
        />
        <Projects
          title="NO.2 Project"
          description="This is a short description of the project."
          image="https://via.placeholder.com/150"
          tags={[
            { label: "React" },
            { label: "SCSS" },
            { label: "TypeScript" }
          ]}
        />
      </div>
    </section>
  )
}