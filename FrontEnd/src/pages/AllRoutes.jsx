import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Subscription } from './Subscription.jsx'
import { CoursePage } from './CoursePage.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'


export const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/Subscription" element={<Subscription/>}/>
            <Route path="/Course" element={<CoursePage/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
