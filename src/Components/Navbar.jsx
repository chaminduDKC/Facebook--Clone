import React from 'react'
import './navbar.css'
import Facebook_Icon from '../Pages/Home page/home assests/facebook.png'
import HomeProPic from '../Pages/Home page/home assests/ronaldo-pro-pic.webp'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left-nav-section">
        <img src={Facebook_Icon} alt="" />
        <div className="nav-search-box">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" name="" placeholder='Search' id="" />
        </div>
      </div>
      <div className="middle-nav-section">
      <i class="fa fa-home" aria-hidden="true"></i>
      <i class="fa fa-television" aria-hidden="true"></i>
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <i class="fa fa-users" aria-hidden="true"></i>
      <i class="fa fa-gamepad" aria-hidden="true"></i>
      </div>

      <div className="right-nav-section">
      
      <i class="fa fa-bars" aria-hidden="true"></i>
      
      <i class="fa fa-commenting" aria-hidden="true"></i>
      
      
      <div>
      <i class="fa fa-bell" aria-hidden="true"></i>
      <span className='notifi-count'>10</span>
      </div>
      
        <div>
        <img src={HomeProPic} alt="" />
        <span class="fa fa-chevron-down" aria-hidden="true"></span>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
