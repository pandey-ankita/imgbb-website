import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../asset/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <div class="left">
          <div class="dropdown1">
            <button class="ddbtn1">About</button>
            <ul class="dd1">
              <li>
                <Link to="/plugin">
                  <a href="#">Plugin</a>
                </Link>
              </li>
              <li>
                <Link to="/api">
                  <a href="#">API</a>
                </Link>
              </li>

              <li>
                <Link to="/term">
                  <a href="#">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a href="#">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="centre">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <Link to="/upload">
            <button>Upload</button>
          </Link>

          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
