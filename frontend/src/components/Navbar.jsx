import { useRef, useState } from "react";
import {
  Box,
  Flex,
  Link,
  List,
  ListItem,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import "./css/Navabar.css";
import LoadingBar from "react-top-loading-bar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = () => {
    ref.current.staticStart();
    setIsOpen(false);
    setTimeout(() => {
      ref.current.complete();
    }, 200);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <LoadingBar color="red" ref={ref} />

      <Flex
        as="nav"
        align="center"
        justify="flex-end"
        wrap="wrap"
        p={2}
        bg="black"
        color="white"
        position="fixed"
        w="100%"
        h="60px"
        zIndex="10"
      >
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          <IconButton
            icon={isOpen ? <CloseIcon zIndex={10} /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            variant="outline"
            color="white"
            border="none"
            bg="blue.900"
          />
        </Box>

        <Box
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          flexDirection={{ base: "column", md: "row" }}
          position={{ base: "fixed", md: "static" }}
          top={{ base: 0, md: "auto" }}
          left={{ base: 0, md: "auto" }}
          right={{ base: 0, md: "auto" }}
          bottom={{ base: 0, md: "auto" }}
          bg={{ base: "black", md: "transparent" }}
          zIndex={{ base: 9, md: "auto" }}
          alignItems="center"
          justifyContent="center"
        >
          <List
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            width={{ base: "100%", md: "auto" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <ListItem marginX="1rem" marginY={{ base: "1rem", md: 0 }}>
              <Link
                className="nav-link home"
                href="#home"
                onClick={handleClick}
                _hover={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem marginX="1rem" marginY={{ base: "1rem", md: 0 }}>
              <Link
                className="nav-link about"
                href="#about"
                onClick={handleClick}
                _hover={{ textDecoration: "none" }}
              >
                About
              </Link>
            </ListItem>
            <ListItem marginX="1rem" marginY={{ base: "1rem", md: 0 }}>
              <Link
                className="nav-link skills"
                href="#skill"
                onClick={handleClick}
                _hover={{ textDecoration: "none" }}
              >
                Skills
              </Link>
            </ListItem>
            <ListItem marginX="1rem" marginY={{ base: "1rem", md: 0 }}>
              <Link
                className="nav-link projects"
                href="#project"
                onClick={handleClick}
                _hover={{ textDecoration: "none" }}
              >
                Projects
              </Link>
            </ListItem>
            <ListItem marginX="1rem" marginY={{ base: "1rem", md: 0 }}>
              <Link
                className="nav-link contact"
                href="#contactus"
                onClick={handleClick}
                _hover={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </ListItem>

            <ListItem marginX="1rem" marginY={{ base: "1rem", md: 0 }}>
              <Button
                className="resume-link"
                bg="red"
                color="#fff"
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

                  closeMenu();
                }}
                _hover={{ textDecoration: "none" }}
              >
                Resume
              </Button>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
