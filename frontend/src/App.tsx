import React, { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Components, Pages } from './gui/index'
import './styles/css/index.min.css'

const App: React.FC<{}> = () => {
  const routes: {
    path: string
    label: string
    component: React.FC<{}>
  }[] = [
      { path: '/', label: 'Home', component: Pages.Home },
      { path: '/about', label: 'About', component: Pages.About },
      { path: '/projects', label: 'Projects', component: Pages.Projects },
      { path: '/blog', label: 'Blog', component: Pages.Blog }
    ]

  const socialLinks: {
    icon: JSX.Element
    link: string
    label: string
    size: number
  }[] = [
      { icon: <Components.Icons.Github />, link: 'https://github.com/anonymByte-404', label: 'GitHub', size: 30 }
    ]

  const email: {
    icon: React.ReactNode
    address: string
    size?: number
  } = {
    icon: <Components.Icons.Mail />,
    address: 'fake@email.com',
    size: 30
  }

  return (
    <>
      <Components.Header links={routes} />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Components.Footer socialLinks={socialLinks} email={email} />
    </>
  )
}

export default App
