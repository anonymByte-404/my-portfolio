import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  links: { path: string; label: string }[]
  icon: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ links, icon }) => {
  const [isVisible, setIsVisible] = useState(true)
  let lastScrollY: number = window.pageYOffset

  const handleScroll = (): void => {
    const currentScrollY: number = window.pageYOffset
    setIsVisible(currentScrollY <= lastScrollY)
    lastScrollY = currentScrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='header-logo'>Aeron Asug</div>
      <nav className='header-nav'>
        <ul className='nav-links'>
          {links.map((link) => (
            <li key={link.path} className='nav-link-item'>
              <Link to={link.path} className='nav-link'>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='header-resume-links'>
        <a
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='resume-link'
        >
          {icon}
          <span className='resume-link-text'>Resume</span>
        </a>
      </div>
    </header>
  )
}

export default Header
