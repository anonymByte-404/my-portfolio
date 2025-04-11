import React, { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Components, Pages } from './gui/index'
import { Images } from './assets'
import './styles/css/index.min.css'

interface SocialLink {
  icon: JSX.Element
  link: string
  label: string
}

type RouteItem = {
  path: string
  label: string
  component: React.FC | (() => JSX.Element)
}

const App: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Components.Icons._Github_ />,
      link: 'https://github.com/anonymByte-404',
      label: 'GitHub'
    }
  ]

  const email = {
    icon: <Components.Icons._Mail_ />,
    address: 'fake@email.com'
  }

  const techLinks = [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      icon: <Components.Icons._TypeScript_ size={20} />
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      icon: <Components.Icons._React_ size={20} />
    },
    {
      name: 'SCSS',
      href: 'https://sass-lang.com/',
      icon: <Components.Icons._Sass_ size={20} />
    }
  ]

  const routes: RouteItem[] = [
    { path: '/', label: 'Home', component: Pages.Home },
    {
      path: '/about',
      label: 'About',
      component: () => <Pages.About socialLinks={socialLinks} />
    },
    {
      path: '/projects',
      label: 'Projects',
      component: () => <Pages.Projects placeholder={Images.placeholder} />
    },
    { path: '/blog', label: 'Blog', component: Pages.Blog }
  ]

  return (
    <>
      <Components.Header
        links={routes}
        icon={<Components.Icons._Download_ size={20} />}
      />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Components.Footer
        socialLinks={socialLinks}
        email={email}
        techLinks={techLinks}
      />
    </>
  )
}

export default App
