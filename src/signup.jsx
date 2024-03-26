import React from 'react';
import './sign.css'; // Make sure to create this CSS file
import logo from './logo.jpg';


const SignUpPage = () => {
    return (
<main>
    <div class="box">
        <div class="inner-box">
            <div class="forms-wrap"></div>
            <div class="logo">
                <img src={logo} alt="Schedule Genius Logo"/>
                <h4>Schedule Genius</h4>
            </div>
            <div class="right">
                <div class="wrapper">
                  <h1 class="heading">Sign Up</h1>
                  <form action="#" class="form">
                    <div class="input-group">
                      <input type="text" id="name" class="" />
                      <label for="name">Username</label>
                    </div>
                    <div class="input-group">
                      <input type="email" id="email" />
                      <label for="email">Email</label>
                    </div>
                    <div class="input-group">
                      <input type="password" id="password" />
                      <label for="password">Password</label>
                    </div>
                    <button class="btn">Create Account</button>
                    <p class="bottom-text">
                      Already have an account?
                      <a href="#">Log in</a>
                      </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>

);
};

export default SignUpPage;
