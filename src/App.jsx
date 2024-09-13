import React from 'react'
import Login from './Pages/login/LoginMenu/Login'
import Forgot from './Pages/login/forgot password/Forgot'
import Reset from './Pages/login/reset password menu/Reset'

const App = () => {
  return (
    <div>
      <div className='login-pages'>
      <Login />
      <Forgot/>
      <Reset/>
      </div>
    </div>
  )
}

export default App
