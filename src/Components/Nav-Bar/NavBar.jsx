import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav__bar">
        <img src="../../logo.svg" alt="" />
        <div>
          <Link className="nav__links " to="/">
            About Us
          </Link>
          <Link className="nav__links " to="/">
            Stories
          </Link>
          <Link className="nav__links " to="/">
            Contact
          </Link>
          <Link className="nav__links " to="/">
            Log in
          </Link>
          <button className="sign__up__btn">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
