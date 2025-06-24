import { useMediaQuery } from "../hooks/useMediaQuery";
import { useEffect, useState, CSSProperties } from "react";

const Navbar = () => {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"] as const;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    // when a section crosses the center 40% of the viewport, mark it active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        // rootMargin tweaks trigger point so the observed area is roughly the
        // middle of the screen (40% top & bottom margins)
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
