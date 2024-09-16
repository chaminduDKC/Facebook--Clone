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
      <HomeLeftSidebar/>
      <HomeMiddleSection/>

      <HomeRightSidebar/>
     </div>
     
    </div>
  )
}

export default Home
