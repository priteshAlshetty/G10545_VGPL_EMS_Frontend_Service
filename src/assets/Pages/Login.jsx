import React, { useState } from 'react';
import './Login.css';

// import Footer from '../../Components/Footer/Footer';
// import PageHeader from '../../Components/PageHeader/PageHeader'
// import Logo from '../icon/logo.jpeg';

function LoginPage() {
  const [email, setEmail] = useState('admin@mq.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic hardcoded login validation
    if (email === 'admin@mq.com' && password === 'admin') {
       alert('Login Succesful');
      window.location.href = '/'; // Redirect after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (<>
 
    <div className="login-page">
      <div className="login-container">
        {/* Login Form Section */}
        <div className="login-left">
            <h2 style={{textAlign:"center"}}>Login</h2>
          {/* <img src={Logo} alt="Company Logo" className="Logo" /> */}
          <form className="Form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>

        {/* Right Section - Static Text */}
        <div className="login-right">
          <div className="logo-img" ><img src="/logo.jpg" alt="Logo" className="logo-login" /></div>
          <h1>Energy Management System</h1>
          <h2>Welcome Back!</h2>
          <p>*Please login with your credentials.</p>
        </div>
      </div>
       
    </div>
 <div className='footer'>©  Multiquadrant Industrial Controls (I) Pvt. Ltd. 2026</div>
    </>
  );

}

export default LoginPage;
