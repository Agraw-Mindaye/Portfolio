import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { CSSProperties } from "react";

const Projects = () => {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm"; // For small screens < 768px
  const isTablet = breakpoint === "md" || breakpoint === "lg"; // For 768px ≤ width < 1280px

  const projectSectionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
  };

  const titleStyle: CSSProperties = {
    position: "relative",
    fontSize: isTablet ? "2.5rem" : isMobile ? "1.75rem" : "3rem",
    marginTop: "5rem",
    marginBottom: isMobile ? "3rem" : isTablet ? "5rem" : "8rem",
    color: "#fff",
    borderBottom: "solid 4px #f97316",
  };

  // Grid layout styles for responsiveness
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", // 4x1 for mobile, 2x2 for others
    gap: isMobile ? "2rem" : "3rem",
    maxWidth: "1200px",
    width: "100%",
    padding: "0 1rem",
    justifyContent: isMobile ? "center" : "space-between",
  };

  return (
    <section id="projects" style={projectSectionStyle}>
      <h2 style={titleStyle}>Projects</h2>

      <div style={gridStyle}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  isMobile,
}: {
  project: { title: string; description: string; link: string; live: string };
  isMobile: boolean;
}) => {
  // Card container
  const cardContainerStyle: CSSProperties = {
    perspective: "1000px",
    display: "flex",
    justifyContent: "center",
  };

  // Card size adjustments for different screen sizes
  const cardStyle: CSSProperties = {
    width: isMobile ? "80%" : "100%", // Smaller cards for mobile, full width for others
    height: isMobile ? "18rem" : "20rem",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#1F2937",
    padding: "1.5rem",
    color: "#E0E0E0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 12px",
    // backgroundColor: "#22c55e",
    color: "#fff",
    border: "2px solid #f97316",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem",
    textDecoration: "none",
  };

  return (
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <h3 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#f97316" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "1rem", textAlign: "center", marginBottom: "1rem" }}>{project.description}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Live App Button */}
          <a href={project.live} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <FaExternalLinkAlt /> Live App
          </a>
          {/* GitHub Button */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects data
const projects = [
  {
    title: "Awesome Social",
    description: "A social media marketing agency that helps clients build their brand presence online",
    link: "https://github.com/alexkahndev/awesome-social",
    live: "https://awesomesocial.app/",
  },
  {
    title: "Bergen Routes",
    description: "A wayfinding web application to help users navigate large buildings",
    link: "https://github.com/bergen-routes/bergenroutes.com",
    live: "https://bergenroutes.com/",
  },
  {
    title: "Portfolio Site",
    description: "My personal portfolio showcasing my work and skills.",
    link: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com/",
  },
  {
    title: "Weather App",
    description: "A simple weather app that fetches real-time weather data.",
    link: "https://github.com/yourusername/weatherapp",
    live: "https://weatherapp.com/",
  },
];

export default Projects;
