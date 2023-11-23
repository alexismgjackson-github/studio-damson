import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <header>
      <p className="site--logo">Studio Damson</p>
      <nav className="header--nav">
        <button
          className="header--btn"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <AiOutlineMenu />
        </button>
        <div className="header--menu">
          <ul
            className={
              isNavExpanded ? "header--links expanded" : "header--links hidden"
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
