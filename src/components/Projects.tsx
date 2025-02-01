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
    gap: "5rem",
  };

  const titleStyle: CSSProperties = {
    position: "relative",
    fontSize: isTablet ? "2.5rem" : isMobile ? "1.75rem" : "3rem",
    marginTop: "5rem",
    marginBottom: isMobile ? "3rem" : isTablet ? "5rem" : "8rem",
    color: "#fff",
    borderBottom: "solid 4px #22c55e",
  };

  const projectContainerStyle = (index: number): CSSProperties => ({
    display: "flex",
    flexDirection: index % 2 === 0 ? "row" : "row-reverse", // Alternates layout
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    position: "relative",
    marginBottom: "30rem",
  });

  const imageContainerStyle = (index: number): CSSProperties => ({
    width: isMobile ? "100%" : "50vw", // Half the viewport width
    height: "40rem",
    backgroundColor: "#3216bb", // Green background
    display: "flex",
    alignItems: "center",
    justifyContent: index % 2 === 0 ? "left" : "right",
    top: "0",
    position: "absolute",
  });

  const imageStyle: CSSProperties = {
    width: "80%", // Ensures image takes up 80% of its container
  };

  const descriptionContainerStyle = (index: number): CSSProperties => ({
    width: isMobile ? "90%" : "45%",
    padding: "2rem",
    backgroundColor: "#1F2937",
    textAlign: isMobile ? "center" : "left",
    color: "#fff",
    marginLeft: index % 2 === 0 ? "auto" : "0",
    marginRight: index % 2 === 0 ? "0" : "auto",
    zIndex: 1, // Ensure text is above the image
    position: "relative",
  });

  const projectTitleStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const projectDescriptionStyle: CSSProperties = {
    fontSize: "1rem",
    marginBottom: "1rem",
  };

  const buttonStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 15px",
    backgroundColor: "#3216bb",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    textDecoration: "none",
  };

  return (
    <section id="projects" style={projectSectionStyle}>
      <h2 style={titleStyle}>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={projectContainerStyle(index)}>
          {/* Image Container */}
          <div style={imageContainerStyle(index)}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={imageStyle}
              />
            )}
          </div>

          {/* Description Container */}
          <div style={descriptionContainerStyle(index)}>
            <h3 style={projectTitleStyle}>{project.title}</h3>
            <p style={projectDescriptionStyle}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
              <FaGithub />
              View Project
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

const projects = [
  {
    title: "Project 1",
    description: "This is a brief description of project 1.",
    link: "https://github.com/yourusername/project1",
    image: "/assets/images/codingimage.jpg", // Replace with actual image path
  },
  {
    title: "Project 2",
    description: "This is a brief description of project 2.",
    link: "https://github.com/yourusername/project2",
    image: "/assets/images/codingimage.jpg", // Replace with actual image path
  },
  {
    title: "Project 3",
    description: "This is a brief description of project 3.",
    link: "https://github.com/yourusername/project3",
    image: "/assets/images/codingimage.jpg", // Replace with actual image path
  },
  {
    title: "Project 4",
    description: "This is a brief description of project 4.",
    link: "https://github.com/yourusername/project4",
    image: "/assets/images/codingimage.jpg", // Replace with actual image path
  },
];

export default Projects;
