import React from 'react'

interface SocialLink {
  link: string
  target?: string
  rel?: string
  icon: React.ReactNode
  label: string
}

interface AboutProps {
  socialLinks: SocialLink[]
}

const About: React.FC<AboutProps> = ({ socialLinks }) => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <header className='about-me'>
          <span className='about-header'>MORE ABOUT ME</span>
          <h1 className='greeting'>
            Hi there! I'm <span className='name'>Aeron</span>
          </h1>
          <p className='about-description'>
            I'm Aeron Asug, a 15-year-old aspiring software engineer who started programming a couple of months ago.
            Although I don’t have much time to dedicate to learning because of school, I’m passionate about growing
            my skills in software engineering. I’ve been learning C/C++, Python, and Ruby, while also exploring
            technologies like React, Next.js, and Node.js. I’m especially interested in cybersecurity.
          </p>
        </header>
        <div className='skills-section'>
          <h2 className='section-title'>Skills</h2>
          <div className='skills-list'>
            {[
              'C/C++',
              'Python',
              'Ruby',
              'React',
              'Next.js',
              'Node.js',
              'Cybersecurity'
            ].map((skill, index) => (
              <span key={index} className='skill-badge'>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className='projects-section'>
          <h2 className='section-title'>Projects</h2>
          <p>Check out my projects on GitHub!</p>
          <a
            href='https://github.com/your-github-username'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub Profile
          </a>
        </div>
        <div className='interests-section'>
          <h2 className='section-title'>Personal Interests</h2>
          <p>
            Besides coding, I enjoy exploring new technologies, reading tech blogs,
            and learning about cybersecurity trends. I also love playing video games
            and outdoor activities!
          </p>
        </div>
        <div className='social-links'>
          <h2 className='section-title'>Connect with Me</h2>
          <div className='social-links-container'>
            {socialLinks.map(({ link, target, rel, icon, label }, index) => (
              <a
                key={index}
                href={link}
                target={target}
                rel={rel}
                className='social-link'
              >
                {icon}
                <span className='social-label'>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
