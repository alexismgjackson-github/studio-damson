import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isNavMenuExpanded, setIsNavMenuExpanded] = useState(false);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <header>
      <Link className="site--logo" to="/">
        Studio Damson
      </Link>
      <nav className="header--nav">
        <button
          className="header--btn"
          onClick={() => {
            setIsNavMenuExpanded(!isNavMenuExpanded);
          }}
        >
          <AiOutlineMenu />
        </button>
        <div className="header--menu">
          <ul
            className={
              isNavMenuExpanded
                ? "header--links expanded"
                : "header--links hidden"
            }
          >
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
