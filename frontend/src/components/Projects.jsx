import React from "react";
import {
  Box,
  CardFooter,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";
import bigbasket from "../img/bigbasketclone.png";
import ajio from "../img/ajioclone.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "bigbasket.com clone",
    description:
      "A web application to buy groceries online. We have implemented some of the features of the website and added some extra functionalities",
    techStack: "HTML | CSS | JavaScript",
    image: bigbasket,
    repoLink: "https://github.com/lokhande2000/bigbasketclone",
    liveLink: "https://superb-medovik-e46505.netlify.app/",
  },
  {
    name: "Ajio.com clone",
    description:
      "Ajio is an online shopping plateform with mainly clothings, footware and other accessories. The main sections of the app are Home page, Products page.",
    techStack: "HTML | CSS | JavaScript",
    image: ajio,
    repoLink: "https://github.com/lokhande2000/AJIO-clone",
    liveLink: "https://ajio-clone-seven.vercel.app/",
  },
];

const Projects = () => {
  return (
    <Box id="project" className="project_section" padding="2rem">
      <Heading className="skillsAndTools" as="h1" size="xl" marginBottom="2rem">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="2rem">
        {projects.map((project, index) => (
          <Box
            key={index}
            className="project-card"
            padding="1rem"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={"gray.900"}
          >
            <Image
              src={project.image}
              alt={project.name}
              className="clone_image"
              borderRadius="md"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  className="project-title"
                  fontSize="xl"
                  fontWeight="bold"
                  color="#fff"
                >
                  {project.name}
                </Text>
              </Box>
              <Text
                className="project-description"
                mt="1"
                fontSize="md"
                color="#fff"
              >
                {project.description}
              </Text>
              <Text
                className="project-tech-task"
                my="2"
                fontSize="sm"
                color="#fff"
              >
                <b>Tech Stack:</b> {project.techStack}
              </Text>

              <HStack>
                <Button
                  bg="red.400"
                  as={Link}
                  href={project.repoLink}
                  className="project-github-link"
                  isExternal
                >
                  <FaGithub />
                </Button>
                <Button
                  bg="red.400"
                  as={Link}
                  href={project.liveLink}
                  className="project-deployed-link"
                  isExternal
                >
                  Go Live
                </Button>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
