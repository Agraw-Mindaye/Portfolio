// Main application container

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {CSSProperties} from "react";

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

const buttonStyle: CSSProperties = {
  marginTop: "1rem",
  padding: "0.8rem 3rem",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#22c55e",
  border: 'solid',
  borderRadius: "2px",
  borderColor: '#22c55e',
  cursor: "pointer",
};

const contentContainerStyle: CSSProperties = {
  backgroundColor: '#111827'
};


export default function App() {
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
    <main>
      {/* Hero Section */}

      <div style={heroSectionStyle}>
        <header style={introStyle}>
          <div style={textStyle}>Hello, I'm Agraw.</div>
          <div style={textStyle}>I'm a software engineer.</div>
          <button onClick={scrollToContent} style={buttonStyle}>
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
