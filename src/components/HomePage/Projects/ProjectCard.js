import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
const ProjectCard = () => {
  return (
    <Box width={"100%"}>
      <Image
        alt="image"
        src="https://images.unsplash.com/photo-1569693799105-4eb645d89aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZSUyMHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        width={"100%"}
        height={["312px", "400px", "550px"]}
        objectFit={"cover"}
      />
      <Flex
        paddingX={"32px"}
        paddingY={"40px"}
        gap={"16px"}
        flexDir={"column"}
        bg={"level1"}
        pos={"relative"}
      >
        <Text fontSize={"24px"} fontWeight={"700"}>
          Pokemon Game App
        </Text>
        <Text fontSize={"18px"} fontWeight={"400"} color={"lightGrey"}>
          Pokemon Game App
        </Text>
        <Flex
          pos={"absolute"}
          bottom={0}
          right={0}
          width={"48px"}
          height={"48px"}
          bg={"primary"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <BsArrowUpRight />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
