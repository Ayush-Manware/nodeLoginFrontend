import React, { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:2400/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.messege);
      } else {
        console.error("Not registered, Try again");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return( 
  <div className="registerDiv">
      <h2>Sign Up with Prepbytes</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} required />

        <label>Phone:</label>
        <input type="tel" value={registerData.phone} onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })} required />

        <label>Email:</label>
        <input type="email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} required />

        <label>Password:</label>
        <input type="password" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} required />

        <button type="button" onClick={handleRegister} className="btn">Register</button>
      </form>
  </div>
  );
};

export default Register;
