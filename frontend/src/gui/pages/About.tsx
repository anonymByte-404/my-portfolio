import React from 'react'

const App: React.FC<{}> = () => {
  return (
    <section className='about-section'>
      <div className='about-me'>
        <span className='about-header'>MORE ABOUT ME</span>
        <h1 className='greeting'>
          Hi there! I'm <span className='name'>Aeron</span>
        </h1>
        <p className='about-description'>
          I'm Aeron Asug, a 15-year-old aspiring software engineer who started programming a couple of months ago.
          Although I don't have much time to dedicate to learning because of school, I'm passionate about growing
          my skills in software engineering, including languages like C/C++, Python, and Ruby. I'm also exploring
          useful tools and technologies such as React, Next.js, and Node.js, and I have a strong interest in learning
          about cybersecurity.
        </p>
      </div>
    </section>
  )
}

export default App
