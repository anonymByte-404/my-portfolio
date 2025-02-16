import React from 'react'
import { JavaScriptIcon, TypeScriptIcon, PythonIcon, CPlusPlusIcon, ReactIcon, ExpressIcon, GitIcon, VsCodeIcon } from './icons/SvgIcons'

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
            {
              icon:
                <JavaScriptIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: ' JavaScript'
            },
            {
              icon:
                <TypeScriptIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'TypeScript'
            },
            {
              icon:
                <PythonIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'Python'
            },
            {
              icon:
                <CPlusPlusIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'C++'
            }
          ]}
        />
        <SkillCategory
          title="Frameworks & Libraries"
          skills={[
            {
              icon:
                <ReactIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'React'
            },
            {
              icon:
                <ExpressIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'Express'
            }
          ]}
        />
        <SkillCategory
          title="Tools"
          skills={[
            {
              icon:
                <GitIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'Git'
            },
            {
              icon:
                <VsCodeIcon
                  width={20}
                  height={20}
                  className='icon'
                />,
              name: 'VS Code'
            },
          ]}
        />
      </div>
    </section>
  )
}
