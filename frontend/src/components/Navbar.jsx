import { useState } from 'react';
import { Box, Flex, Image, Link, List, ListItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../img/surajlokhande-removebg-preview.png';
import './css/Navabar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={2}
      bg="black"
      color="white"
      position="fixed"
      w="100%"
      h="60px"
      zIndex="10"
    >
      <Flex align="center">
        <Image src={logo} alt="Logo" h="50px" />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        <IconButton
          icon={isOpen ? <CloseIcon zIndex={10}/> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          variant="outline"
          color="white"
          border="none"
          bg="blue.900"
        />
      </Box>

      <Box
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
        position={{ base: 'fixed', md: 'static' }}
        top={{ base: 0, md: 'auto' }}
        left={{ base: 0, md: 'auto' }}
        right={{ base: 0, md: 'auto' }}
        bottom={{ base: 0, md: 'auto' }}
        bg={{ base: 'black', md: 'transparent' }}
        zIndex={{ base: 9, md: 'auto' }}
        alignItems="center"
        justifyContent="center"
      >
        <List
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="center"
          width={{ base: '100%', md: 'auto' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <ListItem marginX="1rem" marginY={{ base: '1rem', md: 0 }}>
            <Link
              className="nav-link home"
              href="#home"
              onClick={closeMenu}
            >
              Home
            </Link>
          </ListItem>
          <ListItem marginX="1rem" marginY={{ base: '1rem', md: 0 }}>
            <Link
              className="nav-link about"
              href="#about"
              onClick={closeMenu}
            >
              About
            </Link>
          </ListItem>
          <ListItem marginX="1rem" marginY={{ base: '1rem', md: 0 }}>
            <Link
              className="nav-link skills"
              href="#skill"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </ListItem>
          <ListItem marginX="1rem" marginY={{ base: '1rem', md: 0 }}>
            <Link
              className="nav-link projects"
              href="#project"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </ListItem>
          <ListItem marginX="1rem" marginY={{ base: '1rem', md: 0 }}>
            <Link
              className="nav-link contact"
              href="#contactus"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </ListItem>
          <ListItem marginX="1rem" marginY={{ base: '1rem', md: 0 }}>
            <Link
              className="resume-link"
              href="https://drive.google.com/file/d/1XzugLXcDQD0-j3herrM7OTTfnnqEbCTX/view?usp=sharing"
              target="_blank"
              onClick={closeMenu}
            >
              Resume
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Navbar;
