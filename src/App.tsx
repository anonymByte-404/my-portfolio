import React from 'react'
import { Footer } from 'components/Footer'
import { Header } from './components/Header'
import { Contact } from 'components/Contact'
import { Home } from './pages/Home'
import { Project } from './components/Project'
import { Skill } from './components/Skill'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Project />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
