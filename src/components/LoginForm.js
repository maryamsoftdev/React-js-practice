import React from 'react'

function LoginForm() {
  return (
    <div className="form-container">
    <form className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button className='login-btn' type="submit">Login</button>
    </form>
  </div>
  )
}

export default LoginForm