import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GithubCalendar from "./components/GithubCalender";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    function isloading() {
      setTimeout(() => {
        setloading(false);
      }, 1500);
    }
    isloading();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <GithubCalendar />
          <Projects />
          <Contact />
        </Box>
      )}
    </>
  );
}

export default App;
