import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/app'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Project from './routes/project'
import Index from './routes/index'
import About from './routes/about'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path='/projects/:projectId'
          element={<Project />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);