import { FaGithub, FaLinkedin } from "react-icons/fa";

import { CSSProperties } from "react";

const Footer = () => {
  const footerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    padding: "1.5rem",
    backgroundColor: "#282828",
    position: "relative",
    bottom: 0,
    height: '7rem',
    width: "100%",
  };

  const iconContainerStyle: CSSProperties = {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "0.5rem"
  };

  const iconStyle: CSSProperties = {
    fontSize: "2.5rem",
    color: "#fff",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        {/* LinkedIn Icon */}
        <a href="https://github.com/Agraw-Mindaye" target="_blank" rel="noopener noreferrer">
          <FaLinkedin
            style={{ ...iconStyle, color: "#0077B5" }} // LinkedIn blue color
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>

        {/* GitHub Icon */}
        <a href="https://www.linkedin.com/in/agraw-min/" target="_blank" rel="noopener noreferrer">
          <FaGithub
            style={{ ...iconStyle, color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>
      <div style={{color: "#fff"}}>Agraw Mindaye</div>
    </footer>
  );
};

export default Footer;
