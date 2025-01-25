import { CSSProperties } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Navbar = () => {
  const breakpoint = useMediaQuery();

  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  const navbarStyle: CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between", // Center everything on small screens
    alignItems: "center",
    backgroundColor: "#1F2937",
    padding: "1rem 2rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const nameStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  };

  const navLinksStyle: CSSProperties = {
    display: "flex",
    listStyle: "none",
    gap: "1rem",
  };

  const linkStyle: CSSProperties = {
    textDecoration: "none",
    color: "#fff",
    fontSize: isMobile ? "1.2rem" : "1.5rem", // Smaller font size for smaller screens
    fontWeight: "500",
    cursor: "pointer",
    marginRight: "3rem",
  };

  return (
    <nav style={navbarStyle}>
     { !isMobile && <div style={nameStyle}>Agraw Mindaye</div> }
      <ul style={navLinksStyle}>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
