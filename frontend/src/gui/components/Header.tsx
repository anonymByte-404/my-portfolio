import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  links: { path: string; label: string }[]
}

const Header: React.FC<HeaderProps> = ({ links }) => {
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
      <div className='header-social-links'>
        <a
          href='https://github.com/anonymByte-404'
          target='_blank'
          rel='noopener noreferrer'
          className='social-link'
        >
          <span className='social-link-text'>GitHub</span>
        </a>
      </div>
    </header>
  )
}

export default Header
