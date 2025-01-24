// Main application container

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {CSSProperties} from "react";

const heroSectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: "#111827",
  color: "#333",
  padding: "20px",
};

const buttonStyle: CSSProperties = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#22c55e",
  border: "none",
  borderRadius: "5px",
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
      <header style={heroSectionStyle}>
        <h1 style={{color: 'white'}}>Hello, I'm Agraw.</h1>
        <p style={{color: 'white'}}>I'm a software engineer.</p>
        <button onClick={scrollToContent} style={buttonStyle}>
          Welcome to my page ↓
        </button>
      </header>

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
