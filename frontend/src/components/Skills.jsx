import React from 'react';
import { Box, Heading, SimpleGrid, Text, Image, VStack, HStack, Flex } from '@chakra-ui/react';
import java from "../img/java.png"

const skills = [
  { name: 'HTML 5', image: 'https://mahin-portfolio-final.vercel.app/svgs/HTML_icon.svg' },
  { name: 'CSS3', image: 'https://mahin-portfolio-final.vercel.app/svgs/CSS-icon.svg' },
  { name: 'JavaScript', image: 'https://mahin-portfolio-final.vercel.app/svgs/JAVASCRIPT-icon.svg' },
  { name: 'Java', image: 'https://harshitportfolio242.netlify.app/img/java.jpg' },
  { name: 'React', image: 'https://mahin-portfolio-final.vercel.app/svgs/REACT-icon.svg' },
  { name: 'Redux', image: 'https://mahin-portfolio-final.vercel.app/svgs/Redux.svg' },
  { name: 'Node.js', image: 'https://mahin-portfolio-final.vercel.app/svgs/NodeJS.svg' },
  { name: 'Express', image: 'https://abhijitnr.github.io/static/media/express.3040e390d4376382ab1d.webp' },
  { name: 'Mongoose', image: 'https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png' },
  { name: 'Mongodb', image: 'https://mahin-portfolio-final.vercel.app/svgs/mongodb.svg' },
  { name: 'Bootstrap', image: 'https://mahin-portfolio-final.vercel.app/svgs/BOOTSTRAPT-icon.svg' },
  { name: 'Material-UI', image: 'https://tse3.mm.bing.net/th?id=OIP.bS_ztqE2GqFD2A77_ucFHgHaF8&pid=Api&P=0&h=180' },
  { name: 'Chakra-UI', image: 'https://abhijitnr.github.io/static/media/chakra.43b5b7977014e982e943.jpg' },
  { name: 'Git', image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
  { name: 'PostMan', image: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
  { name: 'VS-Code', image: 'https://tse4.mm.bing.net/th?id=OIP.9qgrMB9I29NuEniFpQp5tAHaHa&pid=Api&P=0&h=180' },
];

const Skills = () => {
  return (
    <Box id="skill" className="skill_container" p={12}>
      <Heading className="skillsAndTools" as="h1" size="xl" m={12}>
        Skills & Tools
      </Heading>
      <SimpleGrid columns={{ base: 1, sm:2, md: 3, lg: 4 }} spacing={15}>
        {skills.map((skill, index) => (
          <SimpleGrid columns={2} alignItems='center' justifyItems='flex-start' rounded='xl' key={index}  className="skills-card" bg='#222' p={4}>
            <Flex alignItems='center' justifyContent='center' width={'100%'}>

            <Image src={skill.image} alt={skill.name} className="skills-card-img" w={10}/>
            </Flex>
            <Text className="skills-card-name" color='#fff' fontSize="lg" >
              {skill.name}
            </Text>
          </SimpleGrid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
