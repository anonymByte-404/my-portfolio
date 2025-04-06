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
      { icon: <Components.Icons._Github_ />, link: 'https://github.com/anonymByte-404', label: 'GitHub', size: 30 }
    ]

  const email: {
    icon: React.ReactNode
    address: string
    size?: number
  } = {
    icon: <Components.Icons._Mail_ />,
    address: 'fake@email.com',
    size: 30
  }

  const techLinks: {
    name: string
    href: string
    icon: JSX.Element
  }[] = [
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: <Components.Icons._TypeScript_ size={20} /> },
      { name: 'React', href: 'https://react.dev/', icon: <Components.Icons._React_ size={20} /> },
      { name: 'SCSS', href: 'https://sass-lang.com/', icon: <Components.Icons._Sass_ size={20} /> },
    ]

  return (
    <>
      <Components.Header links={routes} icon={<Components.Icons._Download_ size={20} />} />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Components.Footer socialLinks={socialLinks} email={email} techLinks={techLinks} />
    </>
  )
}

export default App
