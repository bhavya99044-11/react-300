import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import '../styles/main.scss'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='main'>
      <div className='app'>
      <Header/>
        <Outlet/>
      <Footer/>
      </div>
    </div>
  )
}

export default MainLayout