import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  links: { path: string; label: string }[]
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isVisible, setIsVisible] = useState(true) as [boolean, React.Dispatch<React.SetStateAction<boolean>>]
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
    <header className='header'>
      <div className='logo'>Aeron Asug</div>
      <ul className='nav-links'>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className='social-links'>
        <a href='https://github.com/anonymByte-404' target='_blank' rel='noopener noreferrer'>
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}

export default Header
