import React from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';

const SigninScreen = () => {
  return (
    <div className="signin containerfluid">
      <Link to="/">
        <h3 className="logo">halfwayhome</h3>
      </Link>

      <div className="signin_container">
        <h3>sign in</h3>
        <form>
          <h5>email</h5>
          <input className="signin_input" type="text" />
          <h5>password</h5>
          <input className="signin_input" type="password" />
          <button className="signin_button">Sign In</button>
          <p>
            By signing in you agree to Halfwayhome's Conditions of use and sale
          </p>
          <button className="signin_registerbutton">
            Create your Halfwayhome Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninScreen;
