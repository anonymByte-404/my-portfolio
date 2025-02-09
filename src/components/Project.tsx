import React from "react"

export const Project: React.FC = () => {
  return (
    <section id="project">
      <div className="legend">
        <h2>Projects</h2>
      </div>
      <p>Here are some of the projects I've built, showcasing my skills in development and problem-solving.
        Each project reflects my passion for coding and my commitment to creating useful tools.</p>
      <div className="select-style">
        <button>Default</button>
        <button>SlideShow</button>
      </div>
    </section>
  )
}