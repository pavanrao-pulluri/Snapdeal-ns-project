import React from "react";
import "../assets/css/Signup.css";
import { useState } from "react";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container ui container">
      <h2 className="ui center aligned container">Sign Up here</h2>
      <div className="signupform ui center aligned container">
        <div className="ui icon input inputfeild">
          {/* <span>First Name</span> */}
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="ui input inputfeild">
          {/* <label>Last Name</label> */}
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="ui input inputfeild">
          {/* <label>Email</label> */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ui input inputfeild">
          {/* <label>Password</label> */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="ui button red signupbutton">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
