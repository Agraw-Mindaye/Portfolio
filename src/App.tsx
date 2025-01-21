import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/App.css";

export default function App() {
  const scrollToContent = () => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Hello, I'm Agraw.</h1>
        <p>I am a software engineer.</p>
        <button onClick={scrollToContent} className="welcome-button">
          Welcome to my page ↓
        </button>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Content Container */}
      <div className="content-container">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
