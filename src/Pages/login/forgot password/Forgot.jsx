import React from 'react'
import './forgot.css'
import LoginFooter from '../LoginFooter'
import LoginNavbar from '../LoginNavbar'
import loginData from '../loginData'

function Forgot({handleSearchcancel}) {
  const [searchForgotAccount,setSearchForgotAccount] = React.useState();
  const [showError,setShowError] = React.useState(false);
  const [showMenu,setShowMwnu] = React.useState(false)

  const handleSearchByEmail = (e)=>{
    setSearchForgotAccount(e);
  }

  const handleSearch = ()=>{
    if (loginData[0].userEmail == searchForgotAccount){
      setShowMwnu(true)
      setShowError(false)
      return;
    } else {
      setShowError(true)
      setShowMwnu(false)
    }
    
  }
  return (
    <div className='forgot-menu'>
      <LoginNavbar/>
      <div className="forgot-find-acc">
        <div className='find-acc-box'>
        <h1>Find Your Account</h1>
        {showError && <div className="forgot-error">
          <b>No search results</b>
          <p>Your search did not return any results. 
            Please try again with other information.</p>
        </div>}
        <p>Please enter your email address 
          or mobile number to search for your account.
          </p>
          <input 
            type="text" 
            name="" id="" 
            placeholder='Email address or mobile number' 
            onChange={(e)=>{handleSearchByEmail(e.target.value)}}
          />
          <div className="buttons">
            <button onClick={()=>{handleSearchcancel()}}>Cancel</button>
            <button className='search' onClick={()=>{handleSearch()}}>Search</button>
          </div>
        </div>
        {showMenu && <div className="found-box">
          <p className="found-name">{loginData[0].profileName}</p>
        <input type="password" name="" id=""  placeholder='Enter Password'/>
        <button>Log in</button>
        <a onClick={()=>{
          setShowMwnu(false)
        }} href="#">Not you?</a>
      </div>}
      </div>
     
      <div className="login-page-footer">
      <LoginFooter/>
      </div>
      
      
    </div>
  )
}

export default Forgot
