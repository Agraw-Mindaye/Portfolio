import { useSpring, animated } from "@react-spring/web";
import { FaGithub } from "react-icons/fa";
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
  };

  const titleStyle: CSSProperties = {
    position: "relative",
    fontSize: isTablet ? "2.5rem" : isMobile ? "1.75rem" : "3rem",
    marginTop: "5rem",
    marginBottom: isMobile ? "3rem" : isTablet ? "5rem" : "8rem",
    color: "#fff",
    borderBottom: "solid 4px #22c55e",
  };

  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile || isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: isMobile ? "0.5rem" : "2rem",
    maxWidth: "1200px",
    padding: "0 1rem",
    justifyContent: "center", // Center the grid items horizontally
    alignContent: "center", // Center the rows vertically
  };
  
  const cardStyle: CSSProperties = {
    backgroundColor: "#1F2937",
    borderRadius: "10px",
    padding: "1.5rem",
    color: "#E0E0E0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: isMobile ? "12rem" : isTablet ? "16rem" : "17rem", // Fixed width
    height: isMobile ? "18rem" : isTablet ? "24rem" : "25rem", // Fixed height
  };

  const projectDescriptionStyle: CSSProperties = {
    fontSize: isTablet ? "1.25rem" : "1rem",
    textAlign: 'center'
  }

  const buttonStyle: CSSProperties = {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px",
    backgroundColor: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const AnimatedCard = ({ project }: { project: { title: string; description: string; link: string } }) => {
    const [springStyle, api] = useSpring(() => ({
      transform: "scale(1)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }));

    const handleMouseEnter = () =>
      api.start({ transform: "scale(1.05)", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" });

    const handleMouseLeave = () =>
      api.start({ transform: "scale(1)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" });

    return (
      <animated.div
        style={{ ...cardStyle, ...springStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3>{project.title}</h3>
        <p style={projectDescriptionStyle}>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>
            <FaGithub style={{ marginRight: "8px" }} />
            View
          </button>
        </a>
      </animated.div>
    );
  };

  const projects = [
    {
      title: "Project 1",
      description: "This is a brief description of project 1.",
      link: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "This is a brief description of project 2.",
      link: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      description: "This is a brief description of project 3.",
      link: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 4",
      description: "This is a brief description of project 3.",
      link: "https://github.com/yourusername/project3",
    }
  ];

  return (
    <section id="projects" style={projectSectionStyle}>
      <h2 style={titleStyle}>Projects</h2>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <AnimatedCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
