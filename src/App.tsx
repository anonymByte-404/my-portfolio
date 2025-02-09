import React from 'react'
import { Header } from './components/Header'
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
      </main>
    </div>
  )
}
