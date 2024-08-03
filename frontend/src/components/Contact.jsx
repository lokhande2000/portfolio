import { Box, Heading, Text, Link, Icon, Flex, VStack } from "@chakra-ui/react";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contactus"
      className="contact_section"
      p={{ base: 6, md: 12 }}
      overflow="hidden"
    >
      <VStack
        className="container"
        alignItems="flex-start"
        flexWrap="wrap"
        spacing={5}
        maxW="container.md"
        mx="auto"
      >
        <Heading
          as="h2"
          size={{ base: "lg", md: "xl" }}
          textAlign={{ base: "center", md: "left" }}
          w="full"
        >
          Get in Touch
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "xl" }}
          textAlign={{ base: "center", md: "left" }}
          w="full"
        >
          Whether you want to get in touch, talk about a project collaboration,
          or just say hi, I'd love to hear from you.
        </Text>
        <VStack alignItems="flex-start" spacing={5} w="full">
          <Flex
            w="full"
            className="flexitem"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Icon as={FaPhone} m={3} />
            <Text>+91 7447300432</Text>
          </Flex>
          <Flex
            w="full"
            className="flexitem"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Icon as={FaGithub} m={3} />
            <Link
              id="contact-github"
              href="https://github.com/lokhande2000"
              isExternal
            >
              github.com/lokhande2000
            </Link>
          </Flex>
          <Flex
            w="full"
            className="flexitem"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Icon as={FaLinkedin} m={3} />
            <Link
              id="contact-linkedin"
              href="https://www.linkedin.com/in/suraj-lokhande-22473a1a2/"
              isExternal
            >
              linkedin.com/in/suraj-lokhande-22473a1a2/
            </Link>
          </Flex>
          <Flex
            w="full"
            className="flexitem"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Icon as={FaEnvelope} m={3} />
            <Link id="contact-email" href="mailto:surajlokhande7744@gmail.com">
              surajlokhande7744@gmail.com
            </Link>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Contact;
