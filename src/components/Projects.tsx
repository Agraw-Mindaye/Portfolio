import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useMediaQuery} from "../hooks/useMediaQuery";
import { CSSProperties, useState } from "react";

// projects data
const projects = [
  {
    title: "Smart Environmental Dashboard",
    description:
      "A temperature and humidity sensor that logs readings onto an SD card and displays them on an LCD screen.",
    link: "https://github.com/Agraw-Mindaye/EmbeddedSystems#smart-environment-dashboard",
  },
  {
    title: "Interactive Control LED Panel",
    description:
      "A microcontroller-based system allowing users to switch between different LED modes through physical switches.",
    link: "https://github.com/Agraw-Mindaye/EmbeddedSystems#interactive-led-control-panel",
  },
  {
    title: "Awesome Social",
    description:
      "An online social platform that helps clients build their brand presence online, providing branding, marketing, and sales solutions.",
    link: "https://github.com/alexkahndev/awesome-social",
  },
  {
    title: "Bergen Routes",
    description:
      "A way‑finding web application designed to assist users in navigating large buildings.",
    link: "https://github.com/bergen-routes/bergenroutes.com",
    live: "https://bergenroutes.com/",
  },
  {
    title: "Embedded Projects",
    description: "A collection of my embedded systems roadmap and projects.",
    link: "https://github.com/Agraw-Mindaye/EmbeddedSystems",
  },
] as const;

export default function Projects() {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";
  const isTablet = breakpoint === "md" || breakpoint === "lg";

  const projectSectionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
    scrollMarginTop: "80px",
  };

  const titleStyle: CSSProperties = {
    position: "relative",
    fontSize: isTablet ? "2.5rem" : isMobile ? "1.75rem" : "3rem",
    marginTop: "5rem",
    marginBottom: isMobile ? "3rem" : isTablet ? "5rem" : "8rem",
    color: "#fff",
    borderBottom: "solid 4px #f97316",
  };

  /** Grid forces 2x2 layout on tablet/desktop, 1x4 on mobile */
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: isMobile ? "2rem" : "3rem",
    maxWidth: "1200px",
    width: "100%",
    padding: "0 1rem",
  };

  return (
    <section id="projects" style={projectSectionStyle}>
      <h2 style={titleStyle}>Projects</h2>

      <div style={gridStyle}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    link?: string;
    live?: string;
  };
}) {
  const breakpoint = useMediaQuery();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  const [hoverLive, setHoverLive] = useState(false);
  const [hoverGit, setHoverGit] = useState(false);

  const isPointerCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches; // for hover animations

  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1F2937",
    padding: "1.5rem",
    borderRadius: 10,
    boxShadow: "0 4px 8px rgba(0,0,0,.2)",
    color: "#E0E0E0",
    minHeight: isMobile ? "18rem" : "20rem",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  };

  const buttonRowStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginTop: "1rem",
  };

  const linkButtonStyle = (isHovered: boolean): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    fontSize: "0.9rem",
    borderRadius: 5,
    border: "2px solid #f97316",
    color: isHovered ? "#fff" : "#fff",
    backgroundColor: isHovered ? "#f97316" : "transparent",
    textDecoration: "none",
    transition: "all 0.3s ease",
  });

  return (
    <article style={cardStyle}>
      <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#f97316", marginBottom: "0.5rem" }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "1rem" }}>{project.description}</p>

      <div style={buttonRowStyle}>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={linkButtonStyle(hoverLive)}
            onMouseEnter={() => {
              if (isPointerCapable) setHoverLive(true);
            }}
            onMouseLeave={() => {
              if (isPointerCapable) setHoverLive(false);
            }}
          >
            <FaExternalLinkAlt /> Live App
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={linkButtonStyle(hoverGit)}
            onMouseEnter={() => {
              if (isPointerCapable) setHoverGit(true);
            }}
            onMouseLeave={() => {
              if (isPointerCapable) setHoverGit(false);
            }}
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </article>
  );
}
