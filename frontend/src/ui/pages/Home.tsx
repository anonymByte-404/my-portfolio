import React, { useState } from 'react'
import { FacebookIcon } from '../components/Icons'

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState('')
  const [messageContent, setMessageContent] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Message:', messageContent)
    onClose()
  }

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='socials'>
          <FacebookIcon 
            width={25} 
            height={25} 
            className='icon-socials' 
          />
        </div>
        <div className='mail-btn'>
          <button>example@fake.com</button>
          <button>Book a call</button>
        </div>
        <span>Or send a message</span>
        <div className='message'>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
              />
            </div>
            <div>
              <textarea
                name='message-content'
                id='message-content'
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                placeholder='Message'
                required
              />
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    console.log('Opening modal')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('Closing modal')
    setIsModalOpen(false)
  }

  return (
    <section id='home' className='home'>
      <div className="hero-content">
        <h1>I turn my ideas into reality<br />by creating <span>innovative and useful tools</span></h1>
        <p>Hello, I'm Aeron, a Frontend Developer</p>
        <div className='cta-buttons'>
          <button className='btn-primary' onClick={openModal}>Let's connect</button>
          <button className='btn-secondary'>Download Resume</button>
          {isModalOpen && <Modal onClose={closeModal} />}
        </div>
      </div>
    </section>
  )
}

export default Home
