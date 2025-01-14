import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}