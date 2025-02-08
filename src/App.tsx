import React from 'react'
import { Header } from './components/Header'
import { Home } from './pages/Home'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  )
}
