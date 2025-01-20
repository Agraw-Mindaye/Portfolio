import { useState, useEffect } from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Update active link based on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initialize active link
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="name">
        <a href="/">Agraw Mindaye</a>
      </div>

      {/* Separator */}
      <span className="separator"></span>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" className={activeLink === "#about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeLink === "#projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
