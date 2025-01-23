import { CSSProperties } from "react";

const Navbar = () => {
  const navbarStyle: CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "10px 20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const nameStyle: CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    background: "none",
    border: "none",
  };

  const navLinksStyle: CSSProperties = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  };

  const linkStyle: CSSProperties = {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <div style={nameStyle}>
          Agraw Mindaye
        </div>
      </div>

      {/* Navigation Links */}
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
