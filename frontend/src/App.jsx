import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useRef } from "react";

function App() {
  return (
      <Box>
        <Navbar />
        <button onClick={() => ref.current.complete()}>Complete</button>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
  );
}

export default App;
