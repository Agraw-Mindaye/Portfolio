// About section

import { useSpring, animated } from "@react-spring/web";
import { FaReact, FaPython, FaGitAlt, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiC, SiCplusplus, SiArduino  } from "react-icons/si"; // C, C++, Arduino

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
    flexDirection: isMobile || isTablet ? "column" : "row", // column for mobile or tablet, row for others
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-between",
    gap: isMobile ? "2.5rem" : isTablet ? "4rem" : "7rem",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  };

  const textContainerStyle: CSSProperties = {
    textAlign: "left",
    maxWidth: isMobile ? "90%" : isTablet ? "70%" : "50%",
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#E0E0E0",
  };

  const skillsContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "minmax(100px, auto)",
    gap: "2rem",
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
      width: isMobile ? "5.5rem" : "8rem", // fixed width
      height:  isMobile ? "5.55rem" : "8rem", // fixed height
      padding: "20px",
      borderRadius: "15px",
      border: `4px solid ${borderColor}`,
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
      color: "#22c55e",
      fontSize: "18px",
    };

    const iconStyle: CSSProperties = {
      fontSize: isMobile ? "1.5rem" : "2rem",
      marginBottom: "10px",
    };

    const labelStyle: CSSProperties = { 
      fontSize: isMobile ? "0.75rem" : "1rem",
    }

    const isPointerCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches; // for hover animations

    return (
      <animated.div
        style={{ ...skillBoxStyle, ...springStyle }}
        onMouseEnter={() => {
          if (isPointerCapable) api.start({ transform: "scale(1.2)" })}
        }
        onMouseLeave={() => {
          if (isPointerCapable) api.start({ transform: "scale(1)" })}
        }
      >
        <div style={iconStyle}>{icon}</div>
        <span style={labelStyle}>{label}</span>
      </animated.div>
    );
  };

  return (
    <section id="about" style={aboutSectionStyle}>
      <h2 style={titleStyle}>About</h2>
      <div style={aboutContainerStyle}>
        <div style={textContainerStyle}>
          <p style={descriptionStyle}>
            Driven by a passion for problem solving, I'm a software engineer committed
            to building effecient embedded and full-stack solutions.
            With expertise in modern technologies like C/C++, Python, React, and SQL, I strive 
            to craft seamless user experiences and write clean, maintainble code.
            When I'm not at my computer, I spend my time cooking, staying active, and exploring new music.
          </p>
        </div>

        <div style={skillsContainerStyle}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <AnimatedIcon icon={<SiC />} label="C" borderColor="#f97316" />
            <AnimatedIcon icon={<SiCplusplus />} label="C++" borderColor="#f97316" />
            <AnimatedIcon icon={<SiArduino />} label="Embedded" borderColor="#f97316" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <AnimatedIcon icon={<FaPython />} label="Python" borderColor="#f97316" />
            <AnimatedIcon icon={<FaJsSquare />} label="JavaScript" borderColor="#f97316" />
            <AnimatedIcon icon={<FaDatabase />} label="SQL" borderColor="#f97316" />
            <AnimatedIcon icon={<FaGitAlt />} label="Git" borderColor="#f97316" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <AnimatedIcon icon={<FaHtml5 />} label="HTML" borderColor="#f97316" />
            <AnimatedIcon icon={<FaCss3Alt />} label="CSS" borderColor="#f97316" />
            <AnimatedIcon icon={<FaReact />} label="React" borderColor="#f97316" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
