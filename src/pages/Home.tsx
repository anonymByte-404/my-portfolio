import React from 'react'
import { GithubIcon, FacebookIcon, LocationIcon } from '../components/icons/SvgIcons'

export const Home: React.FC = () => {
  return (
    <section id='home'>
      <div className="introduction">
        <div className="heading-wrapper">
          <div className="who-am-i">
            <h2>Aeron Asug</h2>
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
              <li>
                <a
                  href="https://github.com/anonymByte-404"
                  aria-label="GitHub Profile"
                  target='_blank'
                  title='Github'
                >
                  <GithubIcon
                    width={30}
                    height={30}
                    className='socials'
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61561597600668"
                  aria-label="Facebook Profile or More Social Links"
                  target='_blank'
                  title='Facebook'
                >
                  <FacebookIcon
                    width={30}
                    height={30}
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
