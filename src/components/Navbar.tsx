import { useMediaQuery } from "../hooks/useMediaQuery";
import { useEffect, useState, CSSProperties } from "react";

const Navbar = () => {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + (window.innerHeight / 3); // buffer for better responsiveness
      let currentSection = "#about"; // default
  
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          const sectionTop = window.scrollY + top;
          if (scrollY >= sectionTop && scrollY < sectionTop + height) {
            currentSection = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // function to handle nav link slection
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
    color: activeSection === section ? "#f97316" : "#fff",
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
          <button onClick={() => handleNavClick("#about")} style={linkStyle("#about")}>
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("#projects")} style={linkStyle("#projects")}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("#contact")} style={linkStyle("#contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
