import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

function Nav() {
  function handleLogout() {
    Auth.logout();
    // Additional logic if needed (e.g., redirecting to a different page)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <span className="navbar-logo-text">
              🎮Digital Games Unlimited🕹️
            </span>
          </Link>
        </div>

        <div className="navbar-links">
          {Auth.loggedIn() ? (
            <>
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/orderHistory" className="navbar-link">
                Order History
              </Link>
              <Link to="/" onClick={handleLogout} className="navbar-link">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/signup" className="navbar-link">
                Signup
              </Link>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </>
          )}
        </div>

        <div className="navbar-search">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Nav;
