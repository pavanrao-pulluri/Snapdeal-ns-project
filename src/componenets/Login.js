import React from "react";
import "../assets/css/Login.css";
import "../assets/css/Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessege, setErrorMessege] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!password || !email) {
      setErrorMessege("All Fields must be filled");
    } else if (!email.includes("@")) {
      setErrorMessege("Email is invalid");
    } else {
      setErrorMessege("");
    }
  };

  return (
    <div className="form-fliud-container">
      <h2 className="ui center aligned container">Login on Snapdeal</h2>
      <div className="loginform ui center aligned container">
        <form>
          <div className="insideform ui input">
            {/* <label>
              Email: */}
            <input
              type="email"
              placeholder="Enter your Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="insideform ui input ">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessege && <div style={{ color: "red" }}>{errorMessege}</div>}
          <button
            onClick={handleClick}
            className="loginbutton ui button red"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <span
        className="ui center aligned container"
        style={{ marginTop: "-50px", marginBottom: "25px" }}
      >
        Or
      </span>
      <div
        class="google-btn"
        style={{ marginBottom: "25px", cursor: "pointer" }}
      >
        <div class="google-icon-wrapper">
          <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
      <div className="spandiv ">
        <span className="ui center aligned container">
          if you are a new user{" "}
          <Link to={"/signup"}>
            <button className="ui button red signupbuton">Register Here</button>
          </Link>
          here
        </span>
      </div>
    </div>
  );
};

export default Login;
