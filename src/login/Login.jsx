import React from 'react'

const Login = () => {
  return (
    <form>
    <label>Email:</label>
    <input type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} required />

    <label>Password:</label>
    <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required />

    <button type="button" onClick={handleLogin}>Login</button>
  </form>
  )
}

export default Login