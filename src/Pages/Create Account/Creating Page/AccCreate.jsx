import React from 'react'
import './acc-create.css'
import LoginFooter from '../../login/LoginFooter'

function AccCreate({handleAlreadyHaveAccount}) {
  return (
    <div className='create-page'>
      <div className="create-form">
        <h1>facebook</h1>
        <div className="box">
          <div className="header-box">
            <h2>Create a new account</h2>
            <p>It's quick and easy.</p>
          </div>
          <div className="name-box">
            <input type="text" name="" id="" placeholder='First name' />
            <input type="text" name="" id="" placeholder='Surname' />
          </div>
          <input type="text" name="" id="" placeholder='Mobile number or email address'/>
          <input type="text" placeholder='New password' />
          <div className="dob">
          <label htmlFor="dob">Date of birth</label>
          <input type="date" name="" id="dob" />
          </div>
          
            <div className="gender">
              <p>Gender</p>
            <div className="select-gender">
            <label htmlFor="female"> Female <input type="radio" name="gender" id="female" /> </label>
            <label htmlFor="male"> Male<input type="radio" name="gender" id="male" />  </label>
            <label htmlFor="custom">Custom <input type="radio" name="gender" id="custom" />  </label>
          </div>
            </div>
          <p className="learn-more">People who use our service may have uploaded 
            your contact information to Facebook. <a href="#">Learn more.</a> 
            </p>
            <p className="policy-text">By clicking Sign Up, you agree to our 
              <a href="#">Terms</a>, <a href="#">Privacy</a> 
              <a href="#">Policy</a> and <a href="#">Cookies Policy.</a> 
              You may receive SMS notifications from us and can opt out at any time.</p>
              <div className="sign-up-buttons">
                <button className='sign-up'>Sign Up</button>
                <button className='already-have' onClick={()=>{handleAlreadyHaveAccount()}}>Already have an account?</button>
              </div>

        </div>
      </div>
      <div className="acc-cr-navbar">
      <LoginFooter/>
      </div>
    </div>
  )
}

export default AccCreate
