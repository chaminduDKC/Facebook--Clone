import React from 'react'
import './reset.css'
import LoginNavbar from '../LoginNavbar'
import LoginFooter from '../LoginFooter'

function Reset({handleNotYou}) {
  return (
    <div>
      <LoginNavbar/>
      <div className="reset-menu">
        <div className="reset-menu-box">
          <h2>Reset Your Password</h2>
          
          <div className="reset-box">
            <div className="left">
              <p>
              How do you want 
              to receive the code to reset your 
              password?
              </p>
              <label htmlFor="mail"><input defaultChecked  type="radio" name="reset" id="mail" />
              Send code via email</label>
              <span className='reset-way'>c******1@gmail.com</span>
              <label htmlFor="wtsp"><input type="radio" name="reset" id="wtsp" />
              Send code via whatsapp</label>
              <span className='reset-way'>+**********54</span>
              <label htmlFor="tele"><input type="radio" name="reset" id="tele" />
              Send code via SMS</label>
              <span className='reset-way'>+**********34</span>
            </div>
            <div className="right">
              <img src="../../../assests/images/Facebook user.png" alt="" />
              <p>Facebook user</p>
            </div>
          </div>
          <div className="reset-menu-button">
            <button onClick={()=>{handleNotYou()}}>Not you</button>
            <button className='continue'>Continue</button>
          </div>
        </div>
      </div>
      <LoginFooter/>
    </div>
  )
}

export default Reset
