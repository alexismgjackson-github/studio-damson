import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <footer>
      <nav className="footer--nav">
        <div className="footer--primary">
          <p className="site--logo">Studio Damson</p>
        </div>
        <div className="footer--secondary">
          <div className="footer--sitemap">
            <ul className="footer--links">
              <li>
                <NavLink
                  to="/gallery"
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                  Gallery
                </NavLink>
              </li>
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
          <div className="footer--follow">
            <ul className="footer--links">
              <li>
                {" "}
                <a className="footer--social" href="#0">
                  <FaInstagram alt="Instagram link" />
                </a>
              </li>
              <li>
                <a className="footer--social" href="#0">
                  <FaFacebook alt="Facebook link" />
                </a>
              </li>
              <li>
                <a className="footer--social" href="#0">
                  <FaTwitter alt="Twitter link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p className="footer--text">Designed & Developed by Alexis Jackson</p>
    </footer>
  );
}

export default Footer;
