import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
      <Box>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
  );
}

export default App;
