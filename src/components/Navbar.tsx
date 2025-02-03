import { useState, CSSProperties } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Navbar = () => {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  const [activeSection, setActiveSection] = useState<string>("");

  // Function to handle smooth scrolling
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const target = document.querySelector(section);
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;

    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const navbarStyle: CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between",
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
    gap: "2rem",
    marginRight: isMobile ? "0" : "3rem",
  };

  const linkStyle = (section: string): CSSProperties => ({
    textDecoration: "none",
    color: activeSection === section ? "#f97316" : "#fff", // Change color only when clicked
    fontSize: isMobile ? "1.2rem" : "1.5rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    paddingBottom: "4px",
  });

  return (
    <nav style={navbarStyle}>
      {!isMobile && <div style={nameStyle}>Agraw Mindaye</div>}
      <ul style={navLinksStyle}>
        <li>
          <a onClick={() => handleNavClick("#about")} style={linkStyle("#about")}>
            About
          </a>
        </li>
        <li>
          <a onClick={() => handleNavClick("#projects")} style={linkStyle("#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a onClick={() => handleNavClick("#contact")} style={linkStyle("#contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
