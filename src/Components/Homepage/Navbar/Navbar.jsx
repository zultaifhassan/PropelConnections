import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-outer-div">
      <div className="navbar-inner-div">
        <div className="navbar-logo-side">
          <div className="logo-side">
            <img src="/Images/logo.png" alt="logo" />
          </div>
          <div className="explore-button">
            <button>
              Explore <img src="/Images/Home/down.png" alt="down" />
            </button>
          </div>
        </div>
        <div className="Login-side-navbar">
            <div className="login-user-icon">
                <img src="/Images/Home/user.png" alt="" />
                <p>Login</p>
            </div>
            <div className="dashboard-button">
                <button>Join as a Professional</button>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
