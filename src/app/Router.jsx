import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Index from '../pages/Index'

const Router = createBrowserRouter([
  {
    element:<MainLayout/>,
    children:[
      {
        path:'/home',
        element:<Index/>
      }
    ]
  }
])

export default Router