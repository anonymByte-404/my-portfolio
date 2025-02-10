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
      <div className="project-container">
        <div className="project">
          <div className="project-preview-image">

          </div>
          <div className="project-detail">
            <h3>Project</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis, eveniet provident animi, aliquam voluptatem quaerat quae perferendis reiciendis doloremque aspernatur ipsam deleniti repellat placeat. Fugiat harum aut nihil dolores.</p>
          </div>
        </div>
        <div className="project">
          <div className="project-preview-image">

          </div>
          <div className="project-detail">
            <h3>Project</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis, eveniet provident animi, aliquam voluptatem quaerat quae perferendis reiciendis doloremque aspernatur ipsam deleniti repellat placeat. Fugiat harum aut nihil dolores.</p>
          </div>
        </div>
        <div className="project">
          <div className="project-preview-image">

          </div>
          <div className="project-detail">
            <h3>Project</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In omnis, eveniet provident animi, aliquam voluptatem quaerat quae perferendis reiciendis doloremque aspernatur ipsam deleniti repellat placeat. Fugiat harum aut nihil dolores.</p>
          </div>
        </div>
      </div>
    </section>
  )
}