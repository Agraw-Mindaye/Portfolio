import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/App.css";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="content-container">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}