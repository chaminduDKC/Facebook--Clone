import React from "react";
import LoginFooter from "../LoginFooter";
import "./login.css";

const Login = () => {
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
            />
            <span className="error-msg">
              The email address or mobile number you entered isn't connected to
              an account. <a href="#"> Find your account and log in.</a>
            </span>
            <input type="password" name="" placeholder="Password" id="" />
            <button className="submit-btn" type="submit">
              Log in
            </button>
            <button className="forgot-pwd">Forgotten account?</button>

            <hr />
            <p>or</p>

            <button className="create-nw-acc">Create new account</button>
          </form>
        </div>
      </div>
      
      <LoginFooter/>
    </div>
  );
};

export default Login;
