import { useEffect, useState } from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initialize active link
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.querySelector(".hero-section");
    heroSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="name">
        <button onClick={scrollToHero}>
          Agraw Mindaye
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
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
