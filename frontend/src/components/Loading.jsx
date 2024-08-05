import { Spinner, HStack } from "@chakra-ui/react";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <HStack
  h="100vh"
  w="full"
  bg="linear-gradient(to bottom, #1A191B, #331775)"
  justify="center"
>
  {/* <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  /> */}

  <RotatingLines
    visible={true}
    height="96"
    width="96"
    color="grey"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
</HStack>

  );
};

export default Loading;
