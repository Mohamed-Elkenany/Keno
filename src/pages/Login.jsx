import React from 'react';

const Login = () => {
  return (
    <div className='login-container'>
      <div className="wrapper">
        <h1>SIGN IN</h1>
        <form >
          
          <input type="username" placeholder='username' />
          <input type="password" placeholder='password' />
          <button>LIGIN</button>
          <a href="#">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href="#">CRAETE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
