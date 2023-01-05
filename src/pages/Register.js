import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form>
    <div className="login_controls">
      <h1>Register</h1>
      <div className="uname_controls">
        <label>Username:</label>
        <input type="text"></input>
      </div>
      <div className="password_controls">
        <label>Password:</label>
        <input type="text"></input>
      </div>
      <div className="password_controls">
        <label>Re-Enter Password:</label>
        <input type="text"></input>
      </div>
      <div className="password_controls">
        <label>Email:</label>
        <input type="text"></input>
      </div>
      <div className="action_controls">
        <button>Register</button>
      </div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </div>

  </form>
   
  );
};

export default Register;
