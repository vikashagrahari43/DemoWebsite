import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from "./Components/Contact/Contact.jsx"
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout />} >
        <Route path='' element ={<Home />} />
        <Route path='About' element ={<About />} />
        <Route path='Contact' element ={<Contact />} />
        <Route path='Github' element ={<Github/>} />
        <Route path='user/:user' element ={<User/>} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
