import React from 'react'

type Skill = {
  icon: React.ReactNode
  name: string
}

type SkillCategoryProps = {
  title: string
  skills: Skill[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-icon">{skill.icon}</span> {skill.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Skill: React.FC = () => {
  return (
    <section id="skill" className="skill-section">
      <div className="legend">
        <h2>What I Work With</h2>
      </div>
      <p>Here are the programming languages, frameworks, and tools I use to build my projects.</p>

      <div className="skill-container">
        <SkillCategory
          title="Programming Languages"
          skills={[
            { icon: <span>[ICON]</span>, name: 'JavaScript' },
            { icon: <span>[ICON]</span>, name: 'TypeScript' },
            { icon: <span>[ICON]</span>, name: 'Python' }
          ]}
        />
        <SkillCategory
          title="Frameworks & Libraries"
          skills={[
            { icon: <span>[ICON]</span>, name: 'React' },
            { icon: <span>[ICON]</span>, name: 'Next.js' },
            { icon: <span>[ICON]</span>, name: 'Express' }
          ]}
        />
        <SkillCategory
          title="Tools"
          skills={[
            { icon: <span>[ICON]</span>, name: 'Git & GitHub' },
            { icon: <span>[ICON]</span>, name: 'VS Code' },
            { icon: <span>[ICON]</span>, name: 'Linux' }
          ]}
        />
      </div>
    </section>
  )
}
