import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="user/" element={<User/>}>
         <Route path=":userid" element={<User/>}/>
      </Route>
      <Route 
      loader = {githubInfoLoader}
      path="github" 
      element={<Github/>}/>
      {/*':' - capture everything after slash 
      userid: placeholder
      notice: the path user/ wont work if there isnt something after slash*/}
      <Route path='*' element={<div>Not found</div>}/>
      {/* path='*': Catch-all route for 404 Not Found*/}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
