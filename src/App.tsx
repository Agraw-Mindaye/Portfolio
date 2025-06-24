// Main application container

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { CSSProperties, useEffect, useState } from "react";

const heroSectionStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  height: "100vh",
  width: "100%",
  backgroundColor: "#111827"
};

const introStyle: CSSProperties = {
  position: 'relative',
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
  height: 'auto',
  margin: '0 auto',
  color: '#fff',
  textAlign: 'center'
}

const textStyle: CSSProperties = {
  fontSize: '2rem',
  color: '#fff'
}

const contentContainerStyle: CSSProperties = {
  backgroundColor: '#111827'
};

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: CSSProperties = {
    marginTop: "1rem",
    padding: "0.8rem 3rem",
    fontSize: "16px",
    fontWeight: "bold",
    color: isHovered ? "#fff" : "#f97316",
    backgroundColor: isHovered ? "#f97316" : "transparent",
    border: "solid 2px #f97316",
    borderRadius: "2px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const scrollToContent = () => {
    const contentContainer = document.querySelector(".content-container");
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
  
    if (contentContainer) {
      window.scrollTo({
        top: contentContainer.getBoundingClientRect().top + window.scrollY - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <main style={contentContainerStyle}>
      {/* Hero Section */}

      <div style={heroSectionStyle}>
        <header style={introStyle}>
          <div style={textStyle}>Hello, I'm Agraw.</div>
          <div style={textStyle}>I'm a software engineer.</div>
          <button 
            onClick={scrollToContent} 
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Welcome to my page ↓
          </button>
        </header>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content Sections */}
      <div style={contentContainerStyle} className="content-container">
        <About />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
