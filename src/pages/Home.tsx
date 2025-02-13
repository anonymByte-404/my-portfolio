import React from 'react'
import { useState } from 'react'
import { GithubIcon, FacebookIcon, LocationIcon, ArrowIcon } from '../components/icons/SvgIcons'

export const Home: React.FC = () => {
  const [fbColor, setFbColor] = useState('#bebebe')
  const [ghColor, setGhColor] = useState('#bebebe')

  return (
    <section id='home'>
      <div className="introduction">
        <div className="heading-wrapper">
          <div className="who-am-i">
            <h2>
              Aeron Asug<span className='wave'>👋</span>
            </h2>
            <div className="location">
              <LocationIcon
                width={20}
                height={20}
                className="locationIcon"
              />
              <p className="location-text">
                {"Sask, Canada".split("").map((letter, index) => (
                  <span key={index} className="letter">{letter}</span>
                ))}
              </p>
            </div>
          </div>
          <nav className="socials-links">
            <ul>
              <li
                onMouseEnter={() => setGhColor('#fff')}
                onMouseLeave={() => setGhColor('#bebebe')}
              >
                <a
                  href="https://github.com/anonymByte-404"
                  aria-label="GitHub Profile"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                  data-title='anonmyByte-404'
                >
                  <GithubIcon
                    width={25}
                    height={25}
                    className='socials'
                    color={ghColor}
                  />
                </a>
              </li>
              <li
                onMouseEnter={() => setFbColor('rgb(9, 139, 214)')}
                onMouseLeave={() => setFbColor('#bebebe')}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61561597600668"
                  aria-label="Facebook Profile or More Social Links"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  data-title='Aeron Asug'
                >
                  <FacebookIcon
                    width={25}
                    height={25}
                    className='socials'
                    color={fbColor}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="intro">
          <p>
            I'm a 15-year-old <span className='key-terms'>Front-End Developer</span> who just started programming a few months ago. I'm currently balancing
            my passion for coding with school and personal projects.
          </p>
          <a
            href="#"
            title='About Me'
          >
            <span>Learn More</span>
            <ArrowIcon
              width={18}
              height={18}
              className='about-me'
            />
          </a>
        </div>
      </div>
    </section>
  )
}
