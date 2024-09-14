import React from "react";
import LoginFooter from "../LoginFooter";
import "./login.css";
import loginData from '../loginData'

const Login = ({handleForgotAccount, handleForgotPwd, handleCreateAccount}) => {
  const [userName,setUserName] = React.useState()
  const [password,setPassword] = React.useState()
  const [showLoginError,setShowLoginError] = React.useState(false);

  const handleUserNameChange = (name)=>{
    setUserName(name)
  }

  const handlePasswordChange = (pwd)=>{
    setPassword(pwd)
  }

  const handleLogin = (e)=>{
    e.preventDefault()
    if(userName == loginData[0].userEmail && password == loginData[0].userPassword){
      setShowLoginError(false)
      console.log('Email Pwd matched');
    } else{
      setShowLoginError(true)
      console.log('not matched');
      
    }
    
  }
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="header">facebook</h1>
        <div className="login-box">
          <p>Log in to Facebook</p>
          
          <form action="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email address or phone number"
              onChange={(e)=>{handleUserNameChange(e.target.value)}}
            />
            {showLoginError && <span className="error-msg">
              The email address or mobile number you entered isn't connected to
              an account. <a href="#"> Find your account and log in.</a>
            </span>}
            <input 
              type="password" 
              name="" 
              placeholder="Password" 
              id="" 
              onChange={(e)=>{handlePasswordChange(e.target.value)}}
            />
            <button className="submit-btn" type="submit" onClick={(e)=>{handleLogin(e)}}>
              Log in
            </button>
            <button className="forgot-pwd" onClick={(e)=>{handleForgotAccount(e)}}>Forgotten account?</button>
            <button className="forgot-pwd" onClick={()=>{handleForgotPwd()}}>Forgotten password?</button>

            <hr />
            <p>or</p>

            <button className="create-nw-acc" onClick={()=>{handleCreateAccount()}}>Create new account</button>
          </form>
        </div>
      </div>
      
      <div className="login-page-footer">
      <LoginFooter/>
      </div>
    </div>
  );
};

export default Login;
