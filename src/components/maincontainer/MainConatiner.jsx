import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Leftsidebar from '../leftsidebar/Leftsidebar'
import Rightsidebar from '../rightsidebar/Rightsidebar'
import '../../App.css'
import Stories from '../stories/Stories'

function MainConatiner() {
  return (
    <>
      <BrowserRouter>
        <div className="container-main">
          <Leftsidebar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/story' Component={Stories} />
          </Routes>
          <Rightsidebar />
        </div>
      </BrowserRouter>
    </>
  )
}

export default MainConatiner
