import React, { useEffect, useState } from 'react'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  let lastScrollY = window.pageYOffset

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset
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
      <nav>
        <ul className='nav-links'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </nav>
      <div className='social-links'>
        <a href='https://github.com/anonymByte-404' target='_blank' rel='noopener noreferrer'>
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}

export default Header
