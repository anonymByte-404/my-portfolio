import React from 'react'
import { GithubIcon, FacebookIcon } from '../components/icons/SvgIcons'

export const Home: React.FC = () => {
  return (
    <section id='home'>
      <div className="introduction">
        <div className="heading-wrapper">
          <h2>Aeron Asug</h2>
          <nav className="socials-links">
            <ul>
              <li>
                <a href="https://github.com/anonymByte-404" aria-label="GitHub Profile">
                  <GithubIcon
                    width={20}
                    height={20}
                    className='socials'
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook Profile or More Social Links">
                  <FacebookIcon
                    width={20}
                    height={20}
                    className='socials'
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="intro">
          <p>
            I'm a 15-year-old Front-End Developer who just started programming a few months ago. I'm currently balancing
            my passion for coding with school and personal projects.
          </p>
        </div>
      </div>
    </section>
  )
}
