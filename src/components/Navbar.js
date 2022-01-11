import React, { useState } from "react";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

function Navbar(props) {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/" className="navbar-link">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link to="/dashboard" className="navbar-item">
                    Dashboard
                  </Link>
                  <Link to="/settings/general" className="navbar-item">
                    Settings
                  </Link>
                  <hr className="dropdown-divider" />
                  <Link
                    to="/auth/signout"
                    className="navbar-item"
                    onClick={(e) => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && (
              <Link to="/auth/signin" className="navbar-item">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
