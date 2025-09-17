import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotForm, setForgotForm] = useState({ email: "", newPassword: "" });
  const [forgotMsg, setForgotMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // generate id for login request
      // const id = Date.now().toString();

       const body = {
       
        name: "login User", // placeholder since login generally doesn't need name
        email: form.email,
        password: form.password,
      };

        const res = await axios.post(
        "http://35.179.173.165:9302/api/auth/login",
        body
      ); console.log("login response: ", res.data);
      localStorage.setItem("token", res.data.token);
      setMessage("✅ Login successful!");
      navigate("/");
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.msg || err.message));
    }
  };

  // Handle forgot password
  const handleForgotChange = (e) => {
    setForgotForm({ ...forgotForm, [e.target.name]: e.target.value });
  };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    try {
       const res = await axios.post(
        "http://35.179.173.165:9302/api/auth/reset-password",
        forgotForm
      );
      setForgotMsg("✅ " + res.data.msg);
      setForgotForm({ email: "", newPassword: "" });
      setTimeout(() => setShowForgot(false), 1000);
    } catch (err) {
      setForgotMsg("❌ " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="form-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="inputfield"
          value={form.email}
          onChange={handleChange}
          required
        /><br></br>
        <input
          type="password"
          name="password"
          className="inputfield"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
        /><br></br>
        <Link
          type="button"
          className="forgot-btn"
          onClick={() => setShowForgot(true)}
        >
          Forgot Password
        </Link>
        <br></br>
        <button type="submit" className="lgn_btn">Login</button>
        <p>
          Don't have an account ? <Link to="/admin/signup">Go to SignUp</Link>
        </p>
      </form>
      <p>{message}</p>

      {/* Forgot Password Modal */}
      {showForgot && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reset Password</h3>
            <form onSubmit={handleForgotSubmit}>
              <input
                type="email"
                name ="email"
                className="inputfield"
                placeholder="Enter your email"
                value={forgotForm.email}
                onChange={handleForgotChange}
                required
              />
              <input
                className="inputfield"
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                value={forgotForm.newPassword}
                onChange={handleForgotChange}
                required
              />
              <button type="submit">Reset Password</button>
              <button type="button" onClick={() => setShowForgot(false)}>
                Cancel
              </button>
            </form>
            <p>{forgotMsg}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
