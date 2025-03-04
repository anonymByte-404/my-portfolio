import React, { useEffect } from 'react'

const Header: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('nav a')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'))

            const activeLink = document.querySelector(
              `nav a[href='#${entry.target.id}']`
            );
            if (activeLink) {
              activeLink.classList.add('active')
            }
          }
        })
      },
      { root: null, threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header>
      <h1>Aeron</h1>
      <nav>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
