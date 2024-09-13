import React from 'react'
import Login from './Pages/login/LoginMenu/Login'
import Forgot from './Pages/login/forgot password/Forgot'
import Reset from './Pages/login/reset password menu/Reset'
import AccCreate from './Pages/Create Account/Creating Page/AccCreate'

const App = () => {
  return (
    <div>
      <div className='login-pages'>
      <Login />
      <Forgot/>
      <Reset/>
      <AccCreate/>
      </div>
    </div>
  )
}

export default App
