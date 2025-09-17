import React, { useState } from "react";
import axios  from "axios";
import { Link } from "react-router-dom";

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
    <div className="form-container" style={{marginTop:"20%"}}>
      <h2 className="">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="inputfield"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="inputfield"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="inputfield"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account ? <Link to="/admin/login">Go to Login</Link>
        </p>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
