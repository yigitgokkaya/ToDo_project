import React from "react";
import { Link } from "react-router-dom";
import "../styling/Login.css";

const Login = () => {
  return (
    <form>
      <div className="login_controls">
        <h1>Login</h1>
        <div className="uname_controls">
          <label>Username:</label>
          <input type="text"></input>
        </div>
        <div className="password_controls">
          <label>Password:</label>
          <input type="text"></input>
        </div>
        <div className="action_controls">
          <button>Login</button>
        </div>
        <div>
          <Link to="/Register">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
