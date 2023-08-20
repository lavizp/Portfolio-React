import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Flex bg="peach" color="black" wrap="wrap">
      <Flex
        paddingX={["20px", "20px", "74px"]}
        paddingY="100px"
        flexDir="column"
        gap="12px"
        justifyContent="space-between"
        minWidth="450px"
        flex={1}
      >
        <Box>
          <Text fontSize="55px" fontWeight="700">
            Who am I?
          </Text>
          <Text fontSize="18px" fontWeight="400" color="lightGrey">
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe. I try
            to grasp these things with my values: authenticity, creativity, &
            hospitality.
          </Text>
        </Box>
        <Box
          p={2}
          borderBottom="1px solid black"
          w="fit-content"
          cursor="pointer"
        >
          <Text>More about me</Text>
        </Box>
      </Flex>
      <Box display={["none", "none", "none", "block"]}>
        <Image
          src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
          width="100%"
          height="100%"
          objectFit="cover"
        ></Image>
      </Box>
    </Flex>
  );
};

export default AboutSection;
