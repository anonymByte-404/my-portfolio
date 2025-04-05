import React from 'react'

interface SocialLink {
  icon: React.ReactNode
  link: string
  label: string
  size?: number
}

interface EmailInfo {
  icon: React.ReactNode
  address: string
  size?: number
}

interface FooterProps {
  socialLinks: SocialLink[]
  email: EmailInfo
}

const Footer: React.FC<FooterProps> = ({ socialLinks, email }) => {
  const generalLinks: string[] = ['Home', 'About', 'Projects', 'Blog']
  const techLinks: string[] = ['TypeScript', 'React', 'SCSS']

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-intro'>
          <h2 className='footer-name'>Aeron Asug</h2>
          <p className='footer-description'>
            Help you create experiences where aesthetics & functionality seamlessly come together.
          </p>
          <div className='footer-socials'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='social-link'
                title={social.label}
              >
                {React.cloneElement(social.icon as React.ReactElement<any>, { size: social.size || 24 })}
              </a>
            ))}
          </div>
        </div>
        <div className='footer-links'>
          <h3 className='footer-links-title'>General</h3>
          <ul className='footer-links-list'>
            {generalLinks.map((link, index) => (
              <li key={index} className='footer-link-item'>{link}</li>
            ))}
          </ul>
        </div>
        <div className='footer-tech'>
          <h3 className='footer-tech-title'>Built with</h3>
          <ul className='footer-tech-list'>
            {techLinks.map((link, index) => (
              <li key={index} className='footer-tech-item'>{link}</li>
            ))}
          </ul>
        </div>
        <div className='footer-contact'>
          <p className='footer-contact-description'>
            Feel free to reach out to me for any inquiries or collaboration opportunities.
          </p>
          <div className='footer-email'>
            <a href={`mailto:${email.address}`} className='email-link'>
              {React.cloneElement(email.icon as React.ReactElement<any>, { size: email.size || 24 })}
              <span className='email-address'>{email.address}</span>
            </a>
          </div>
        </div>
      </div>
      <span className='footer-copyright'>Copyright &copy; 2025 Aeron Asug. All rights reserved.</span>
    </footer>
  )
}

export default Footer
