// About section

import { useSpring, animated } from "@react-spring/web";
import { FaReact, FaPython, FaGitAlt, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiC } from "react-icons/si"; // C icon

import { useMediaQuery } from "../hooks/useMediaQuery";
import { CSSProperties } from "react";

const About = () => {
  const breakpoint = useMediaQuery();

  const isMobile = breakpoint === "xs" || breakpoint === "sm"; // For small screens < 768px
  const isTablet = breakpoint === "md" || breakpoint === "lg"; // For 768px ≤ width < 1280px

  const aboutSectionStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: '2rem'
  };

  const titleStyle: CSSProperties = {
    position: "relative",
    fontSize: isTablet ? "2.5rem" : isMobile ? "1.75rem" : "3rem",
    marginTop: "5rem",
    marginBottom: isMobile ? "3rem" : isTablet ? "5rem" : "8rem",
    color: "#fff",
    borderBottom: "solid 4px #f97316",
  };

  const aboutContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: isMobile || isTablet ? "column" : "row", // Column for mobile or tablet, row otherwise
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-between", // Center content on smaller screens
    gap: isMobile ? "2.5rem" : isTablet ? "4rem" : "7rem", // Smaller gaps for mobile and tablet
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto", // Center horizontally
  };

  const textContainerStyle: CSSProperties = {
    textAlign: "left",
    maxWidth: isMobile ? "90%" : isTablet ? "70%" : "50%", // Adjust width for different screen sizes
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#E0E0E0",
  };

  const skillsContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Adjust grid for screens
    gap: "20px", // Consistent gap
    marginTop: "20px",
    justifyItems: "center",
    alignItems: "center",
  };

  const AnimatedIcon = ({ icon, label, borderColor }: { icon: JSX.Element; label: string; borderColor: string }) => {
    const [springStyle, api] = useSpring(() => ({
      transform: "scale(1)",
      config: { tension: 300, friction: 10 },
    }));

    const skillBoxStyle: CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: isMobile ? "5.5rem" : "10rem", // Fixed width
      height:  isMobile ? "5.55rem" : "10rem", // Fixed height
      padding: "20px",
      borderRadius: "15px",
      border: `4px solid ${borderColor}`,
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
      color: "#22c55e",
      fontSize: "18px",
    };

    const iconStyle: CSSProperties = {
      fontSize: isMobile ? "1.5rem" : "3rem",
      marginBottom: "10px",
    };

    const labelStyle: CSSProperties = { 
      fontSize: isMobile ? "0.8rem" : "1.5rem",
    }

    return (
      <animated.div
        style={{ ...skillBoxStyle, ...springStyle }}
        onMouseEnter={() => api.start({ transform: "scale(1.2)" })}
        onMouseLeave={() => api.start({ transform: "scale(1)" })}
      >
        <div style={iconStyle}>{icon}</div>
        <span style={labelStyle}>{label}</span>
      </animated.div>
    );
  };

  return (
    <section id="about" style={aboutSectionStyle}>
      {/* Section Title */}
      <h2 style={titleStyle}>About</h2>

      {/* Content Container */}
      <div style={aboutContainerStyle}>
        {/* Text Content */}
        <div style={textContainerStyle}>
          <p style={descriptionStyle}>
            <p>Driven by a passion for problem solving, I'm a software engineer committed
            to building effecient embedded and full-stack solutions.</p>
            With expertise in modern technologies like C/C++, Python, React, and SQL, I strive 
            to craft seamless user experiences and write clean, maintainble code.
            When I'm not at my computer, I spend my time cooking, staying active, and exploring new music.
          </p>
        </div>

        {/* Skills */}
        <div style={skillsContainerStyle}>
          {[
            { icon: <SiC />, label: "C", borderColor: "#f97316" },
            { icon: <FaPython />, label: "Python", borderColor: "#f97316" },
            { icon: <FaJsSquare />, label: "JavaScript", borderColor: "#f97316" },
            { icon: <FaReact />, label: "React", borderColor: "#f97316" },
            { icon: <FaDatabase />, label: "SQL", borderColor: "#f97316" },
            { icon: <FaGitAlt />, label: "Git", borderColor: "#f97316" },
          ].map((skill, index) => (
            <AnimatedIcon
              key={index}
              icon={skill.icon}
              label={skill.label}
              borderColor={skill.borderColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

