import React from 'react'
import './forgot.css'
import LoginFooter from '../LoginFooter'
import LoginNavbar from '../LoginNavbar'

function Forgot() {
  return (
    <div className='forgot-menu'>
      <LoginNavbar/>
      <div className="forgot-find-acc">
        <div className='find-acc-box'>
        <h1>Find Your Account</h1>
        <div className="forgot-error">
          <b>No search results</b>
          <p>Your search did not return any results. 
            Please try again with other information.</p>
        </div>
        <p>Please enter your email address 
          or mobile number to search for your account.
          </p>
          <input type="text" name="" id="" placeholder='Email address or mobile number' />
          <div className="buttons">
            <button>Cancel</button><button>Search</button>
          </div>
        </div>
      </div>
      <LoginFooter/>
    </div>
  )
}

export default Forgot
