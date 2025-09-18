import React, { useState } from "react";
import axios  from "axios";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Generate random id
      // const id = Date.now().toString();
      
      const body = {
        
        name: form.name,
        email: form.email,
        password: form.password,
      };

        const res = await axios.post(
        "http://35.179.173.165:9302/api/auth/register",
        body
      );
      console.log("user response: ", res.data);
      setMessage("✅ Registered successfully!");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="form-container" >
        <img src="../ICON Logo AUS - Black.png" className="top-logo" alt="logo"></img>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="Name"
          className="inputfield"
          placeholder="Enter Full Name"
          value={form.name}
          onChange={handleChange}
          required
           style={{
            margin:"10px 0px"
          }}
                   />
        {/* <input
          type="text"
          name="name"
          className="inputfield"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        /> */}
       <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          className="inputfield"
          placeholder="Enter User Email"
          value={form.email}
          onChange={handleChange}
          required
           style={{
            margin:"10px 0px"
          }}
                   />
        {/* <input
          type="email"
          name="email"
          className="inputfield"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        /> */}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          className="inputfield"
          placeholder="Enter User Password"
          value={form.password}
          onChange={handleChange}
          required
           style={{
            margin:"10px 0px"
          }}
                   />
        {/* <input
          type="password"
          name="password"
          className="inputfield"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        /> */}
        <button type="submit" className="lgn_btn">Register</button>
        <p>
          Already have an account ? <Link to="/admin/login" className="link_btn">Go to Login</Link>
        </p>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
