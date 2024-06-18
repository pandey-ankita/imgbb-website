import React, { useState } from "react";
import "./Sign.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., send data to an API
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username or Email address:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign in</button>
        <p>
          <a href="#">Forgot password?</a>
        </p>
      </form>
      <div className="or-separator">
        <span>OR</span>
      </div>
      <div className="social-login">
        <button className="social-button facebook">
          <i className="fab fa-facebook-f"></i> Facebook
        </button>
        <button className="social-button google">
          <i className="fab fa-google"></i> Google
        </button>
        <button className="social-button vk">
          <i className="fab fa-vk"></i> VK
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
