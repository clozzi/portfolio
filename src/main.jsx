import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/app'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Index from './routes/index'
import About from './routes/about'
import StudyBuddies from './routes/sb'
import SpoiledPotatoes from './routes/sp'

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
          path='/studybuddies'
          element={<StudyBuddies />}
        />
        <Route
          path='/spoiled-potatoes'
          element={<SpoiledPotatoes />}
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