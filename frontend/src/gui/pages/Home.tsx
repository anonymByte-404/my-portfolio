import React, { useState } from 'react'
import { Components } from '..'

const Home: React.FC<{}> = () => {
  const [copied, setCopied] = useState(false) as [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  const [showModal, setShowModal] = useState(false) as [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }) as [{
    name: string
    email: string
    message: string
  }, React.Dispatch<React.SetStateAction<{
    name: string
    email: string
    message: string
  }>>]

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText('fake@email.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err: unknown) {
      console.error('Failed to copy:', err)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowModal(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className='home-section'>
      <div className='home-content'>
        <h1 className='home-title'>
          I turn ambitious ideas into engaging<br />
          <span className='highlight'>digital experiences</span> through efficient code
        </h1>
        <p className='home-subtitle'>
          Hi, I'm <strong>Aeron Asug</strong> — an aspiring software engineer
        </p>
        <div className='home-buttons'>
          <button
            type='button'
            className='home-btn connect-btn'
            onClick={() => setShowModal(true)}
            aria-label='Connect with me'
            title='Connect with me'
          >
            Let&apos;s connect
          </button>
          <button
            type='button'
            className='home-btn email-btn'
            onClick={handleCopy}
            aria-label='Copy email to clipboard'
            title='Click to copy email'
          >
            {copied ? 'Copied!' : (
              <>
                <Components.Icons._Copy_ size={16} className={copied ? 'copied-icon' : ''} /> fake@email.com
              </>
            )}
          </button>
        </div>
      </div>

      {showModal && (
        <div className='popup-overlay' onClick={() => setShowModal(false)}>
          <div className='popup-modal' onClick={(e) => e.stopPropagation()}>
            <h2>Send me a message</h2>
            <form onSubmit={handleSubmit}>
              <div className='input-row'>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Your email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name='message'
                placeholder='Your message...'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className='popup-buttons'>
                <button type='submit' className='send-btn'>Send</button>
                <button type='button' onClick={() => setShowModal(false)} className='cancel-btn'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
