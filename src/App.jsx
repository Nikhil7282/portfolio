import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import NewAbout from "./pages/NewAbout";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <NewAbout /> */}
    </div>
  );
}

export default App;
