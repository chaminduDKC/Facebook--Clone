import React from 'react'
import Login from './Pages/login/LoginMenu/Login'
import Forgot from './Pages/login/forgot password/Forgot'
import Reset from './Pages/login/reset password menu/Reset'
import AccCreate from './Pages/Create Account/Creating Page/AccCreate'
import Home from './Pages/Home page/Home'

const App = () => {
  const [showLoginMenu,setShowLoginMenu] = React.useState(true)
  const [showForgotMenu,setShowForgotMenu] = React.useState(false)
  const [showResetMenu,setShowResetMenu] = React.useState(false)
  const [accountCreateMenu,setAccountCreateMenu] = React.useState(false)

  const handleForgotAccount = (e)=>{
    e.preventDefault()
    setShowForgotMenu(true)
    setShowLoginMenu(false)

    console.log('finding acc'); 
  }
  const handleSearchcancel = ()=>{
    setShowForgotMenu(false)
    setShowLoginMenu(true)

  }

  const handleForgotPwd = ()=>{
    console.log('pwd forgotten');
    setShowResetMenu(true)
    setShowLoginMenu(false)
  }

  const handleNotYou = ()=>{
    setShowResetMenu(false)
    setShowLoginMenu(true)
  }
  const handleCreateAccount = ()=>{
    setAccountCreateMenu(true)
    setShowLoginMenu(false)
  }
  const handleAlreadyHaveAccount = ()=>{
    setAccountCreateMenu(false)
    setShowLoginMenu(true)
  }
  return (
    <div>
      <div>
        <Home/>
      </div>


      {/* <div className='login-pages'>
      {showLoginMenu && <Login handleForgotAccount = {handleForgotAccount} handleForgotPwd = {handleForgotPwd} handleCreateAccount = {handleCreateAccount}/>}
      {showForgotMenu && <Forgot handleSearchcancel={handleSearchcancel}/>}
      {showResetMenu && <Reset handleNotYou = {handleNotYou}/>}
      {accountCreateMenu && <AccCreate handleAlreadyHaveAccount = {handleAlreadyHaveAccount}/>}
      </div> */}
    </div>
  )
}

export default App
