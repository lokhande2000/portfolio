import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { Box, Heading, Button, HStack } from "@chakra-ui/react";

const Hero = () => {
  const [role, setRole] = useState("");

  const [typEffect] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 40,
  });

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ];
    let currentRoleIndex = 0;

    const updateRole = () => {
      setRole(roles[currentRoleIndex]);
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    };

    updateRole();
    const roleInterval = setInterval(updateRole, 4000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <Box id="home" className="hero" padding="2rem" textAlign="center">
      <Box className="center">.</Box>
      <Box className="main">
        {/* <Text className="my" fontSize="xl">
          Hi 👋 my name is
        </Text> */}
        <Heading className="name" as="h2" size="2xl">
          Hello
        </Heading>
        <Heading className="name" as="h2" size="xl">
          I am Suraj Lokhande
        </Heading>
        <HStack fontSize="xl">
          {/* <Heading as="h3" size="lg" color="#fff">
            And I am a
          </Heading> */}
          <Heading
            as="h3"
            size="lg"
            mt={4}
            color="red"
            className="red second-text"
          >
            {typEffect}
            <Cursor cursorColor="red" />
          </Heading>
        </HStack>

        <Button
          className="resume-link"
          mt={2}
          onClick={(e) => {
            e.preventDefault();

            // Open the file in a new tab
            window.open(
              "https://drive.google.com/file/d/1mU1yZXeEddyMy2XvVShU0kOQNHRukOnz/view?usp=sharing",
              "_blank",
              "noopener,noreferrer"
            );

            // Create a link element for downloading
            const downloadLink = document.createElement("a");
            downloadLink.href =
              "https://drive.google.com/uc?export=download&id=1mU1yZXeEddyMy2XvVShU0kOQNHRukOnz";
            downloadLink.download = "Resume.pdf";
            downloadLink.click();
          }}
          _hover={{ textDecoration: "none", backgroundColor: "blue" }}
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
