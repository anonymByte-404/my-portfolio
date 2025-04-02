import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Components, Pages } from './gui/index'
// import './styles/css/index.min.css'

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

  return (
    <>
      <Components.Header links={routes} />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}

export default App
