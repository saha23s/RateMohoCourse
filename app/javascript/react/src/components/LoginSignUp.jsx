import React, { useState } from "react";
// import './login.css'
import Login from "./Login";
import SignUp from "./SignUp";

const LoginSignUp = () => {

  const [page, setPage] = useState('login');

  const handlePageChange = (page) => {
    setPage(page);
  }

  return (
    <div className="loginBox">
      <div class="form">
        <ul class="tab-group">
            <li class="tab"><a onClick={() => handlePageChange('signup')}>Sign Up</a></li>
            <li class="tab"><a onClick={() => handlePageChange('login')}>Log In</a></li>
        </ul>
        {page === 'signup' && (
          <SignUp />
        )}
        {page === 'login' && (
          <Login />
        )} 
        </div>  
    </div>
  )
}

export default LoginSignUp;