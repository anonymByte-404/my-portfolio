import React from 'react'

export const Header: React.FC = () => {
  return (
    <header>
      <h1>Aeron Asug</h1>
      <nav className='nav-links'>
        <ul>
          <li><a href="/blog" aria-label="Blog">Blog</a></li>
          <li><a href="/projects" aria-label="Projects">Projects</a></li>
          <li>
            <a href="/resume" aria-label="Resume">
              <button>
                <span>Resume</span>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
