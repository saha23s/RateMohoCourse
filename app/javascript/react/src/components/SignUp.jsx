import React, { useState } from "react";
// import './login.css'

const SignUp = () => {

    const submit = () => {
        <CoursePage />
    }
    
    return (

    // inspired from https://codepen.io/ehermanson/pen/KwKWEv
    <div className="loginBox">
      <div>
        <div>   
          <h1> SignUp for RateMoHo </h1>
          
          <form action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">
              <label>
                First Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>
        
            <div class="field-wrap">
              <label>
                Last Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off"/>
            </div>
          </div>

          <div class="field-wrap">
            <label>
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Set A Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <button class="button button-block" onClick={() => submit()}> Sign Up </button>
          
          </form>
        </div>
        </div>
    </div>   
  )
}

export default SignUp;