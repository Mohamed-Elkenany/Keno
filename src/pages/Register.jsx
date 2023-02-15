import React from 'react';

const Register = () => {
  return (
    <div className='register-container'>
      <div className="wrapper">
        <h1>CREATE AN ACCOUNT</h1>
        <form >
          <input type="text" placeholder='name' />
          <input type="text" placeholder='last name' />
          <input type="text" placeholder='user name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="password" placeholder='confirm password' />
          <div className="agreement">
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </div>
            <button>CREATE</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
