import React from 'react'
import './home.css'
import NavbarDesktop from '../../Components/Navbar-Desktop'
import HomeLeftSidebar from './home-left-sidebar/HomeLeftSidebar'
import HomeMiddleSection from './middle-section/HomeMiddleSection'
import HomeRightSidebar from './home-right-sidebar/HomeRightSidebar'


function Home() {
  return (
    <div>
     <NavbarDesktop /> 
     <div className='home-content'>
      <div className="left-content">
      <HomeLeftSidebar/>
      </div>
      <div className="middle-content">
      <HomeMiddleSection/>
      </div>

      <div className="right-content">
      <HomeRightSidebar/>
      </div>
     </div>
     
    </div>
  )
}

export default Home
