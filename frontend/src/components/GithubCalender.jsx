import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

const GithubCalendar = () => {
  return (
    <>
      <VStack
        className="react-activity-calender"
        w="full"
        id="github"
        bg="#111"
        color="#fff"
        p={{ base: 2, md: 14 }}
        spacing={12}
      >
        <Heading
          className="skillsAndTools"
          as="h1"
          size="xl"
          //   marginBottom="2rem"
        >
          Github Stats
        </Heading>
        <VStack
          id="github-streak-stats"
          w={{ base: "full", xl: "70%" }}
          border="1px solid #fff"
          p={5}
          rounded="md"
          bg="#141321"
        >
          <GitHubCalendar username="lokhande2000" />
        </VStack>
        <HStack flexDirection={{ base: "column", lg: "row" }}>
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api?username=lokhande2000&theme=radical&hide_border=false&include_all_commits=false&count_private=false"
            alt="img"
          />
          <Image
            id="github-stats-card"
            src="https://github-readme-streak-stats.herokuapp.com/?user=lokhande2000&theme=radical&hide_border=false"
            alt="img"
          />
        </HStack>
      </VStack>
    </>
  );
};

export default GithubCalendar;
