import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider,Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Reg_form from './components/Reg_form.jsx'
import Submit from './components/Submit.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Reg_form/>}>
      <Route path='/form' element={<Reg_form/>}/>
      <Route path='/submit' element={<Submit/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>

  </React.StrictMode>,
)
