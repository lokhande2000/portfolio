import React, { useEffect, useState } from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import suraj from "../img/suraj.png";

const About = () => {
  const [role, setRole] = useState("");

  const [typEffect] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Front End Developer",
      "Back End Developer",
    ],
    loop: {},
    cursor: true,
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
    <Box id="about" className="about_container section" padding="2rem">
      <Heading className="about_section_heading" as="h2">
        About me
      </Heading>
      <Box
        className="imformation_container"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box
          className="image_div"
          flexBasis="50%"
          marginBottom={{ base: "1rem", md: "0" }}
        >
          <Image className="home-img" src={suraj} alt="photo" />
        </Box>
        <Box
          className="information_aboutme"
          flexBasis="50%"
          paddingLeft={{ md: "2rem" }}
        >
          <Text className="my" fontSize="xl">
            Hi my name is
          </Text>
          <Heading className="name" id="user-detail-name" as="h2" size="lg">
            Suraj Lokhande
          </Heading>
          <Text fontSize="lg">
            And I'm a <span className="text absulate">{typEffect} <Cursor cursorColor="red" /></span>{" "}
            
          </Text>
          <Text id="user-detail-intro" marginTop="1rem">
            Hey There I am Suraj Lokhande. A hardworking and highly efficient
            web developer with sound knowledge in full stack technology and
            hands-on practice in Data Structure and Algorithms. Curious about
            modern web technology. Interested in learning technical things.
            Looking for an opportunity to prove my skills in a healthy work
            environment.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
