import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2400/login",
        loginData
      );
      console.log(response);

      const data = await response;

      console.log(data);

      if (response.ok) {
        console.log(data.message);
        localStorage.setItem("token", data.token);
      } else {
        if (data.error) {
          console.error(data.error && data.error);
        }
      }
    } catch (error) {
      console.error("error during login:", error);
    }
  };

  return (
    <div className="registerDiv">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          required
        />

        <button type="button" onClick={handleLogin} className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
