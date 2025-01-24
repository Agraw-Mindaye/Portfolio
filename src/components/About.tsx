// About section

import { useSpring, animated } from "@react-spring/web";
import { FaReact, FaPython, FaGitAlt, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiC } from "react-icons/si"; // C icon

import { CSSProperties } from "react";

const About = () => {
  const aboutSectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle: CSSProperties = {
    position: 'relative',
    fontSize: "4rem",
    marginTop: '5rem',
    marginBottom: "8rem",
    color: '#fff',
    borderBottom: 'solid 4px #22c55e',
  };

  const aboutContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7rem",
    maxWidth: "1200px",
    width: "100%", 
    margin: "0 auto", // Center the container horizontally
  };

  const textContainerStyle: CSSProperties = {
    flex: "1 1 50%",
    textAlign: "left",
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "18px",
    lineHeight: "1.8",
    marginBottom: "20px",
    color: "#E0E0E0",
  };

  const skillsContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Three columns
    gridTemplateRows: "repeat(2, auto)", // Two rows
    gap: "20px", // Gap between rows and columns
    marginTop: "20px",
    justifyItems: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
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
      width: "10rem", // Fixed width
      height: "10rem", // Fixed height
      padding: "20px",
      borderRadius: "15px",
      border: `4px solid ${borderColor}`, // Colorful border
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)", // Subtle shadow
      color: "#22c55e", // Text and icon color
      fontSize: "18px", // Font size for the skill name
    };

    const iconStyle: CSSProperties = {
      fontSize: "48px", // Increased icon size
      marginBottom: "10px",
    };

    return (
      <animated.div
        style={{ ...skillBoxStyle, ...springStyle }}
        onMouseEnter={() => api.start({ transform: "scale(1.2)" })}
        onMouseLeave={() => api.start({ transform: "scale(1)" })}
      >
        <div style={iconStyle}>{icon}</div>
        <span>{label}</span>
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
            Driven by a passion for innovation and problem-solving, I am a dedicated software developer with expertise 
            in modern frameworks like React, Python, and SQL. I thrive at the intersection of creativity and technology, 
            crafting seamless user experiences and efficient solutions. Constantly striving for growth, I embrace 
            life-long learning to stay at the forefront of the ever-evolving tech landscape. 
            Outside of coding, I enjoy cooking, reading, staying active, and exploring new technologies
          </p>
        </div>

        {/* Right-Side Skills */}
        <div style={skillsContainerStyle}>
          {[
            { icon: <SiC />, label: "C", borderColor: "#A8B9CC" },
            { icon: <FaPython />, label: "Python", borderColor: "#3776AB" },
            { icon: <FaJsSquare />, label: "JavaScript", borderColor: "#F7DF1E" },
            { icon: <FaReact />, label: "React", borderColor: "#61DAFB" },
            { icon: <FaDatabase />, label: "SQL", borderColor: "#00758F" },
            { icon: <FaGitAlt />, label: "Git", borderColor: "#F05032" },
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
