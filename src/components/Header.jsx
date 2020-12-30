import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import Logo from "../images/logo.png";
const Header = () => {
  //views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link to="/" className="navbar-brand">
          <img className="Logo" src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mb-2 mb-lg-0 Right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {/* landing Page */}
            </li>
            <li className="nav-item">
              <Link to="/food" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/log" className="nav-link">
                Sign Up
              </Link>
              {/* sign up & sign in */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  //render
  return <header id="header">{showNavigation()}</header>;
};
export default Header;
