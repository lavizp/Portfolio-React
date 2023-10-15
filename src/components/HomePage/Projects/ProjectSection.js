import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <Box paddingX={["20px", "20px", "74px"]} paddingY="150px">
      <Flex
        flexDir={"row"}
        gap={"24px"}
        flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
      >
        <Flex flexDir={"column"} width={"100%"} minW={"320px"} gap={"16px"}>
          <Box>
            <Text fontSize="16px" fontWeight="700" color="lightGrey">
              MY PROJECTS
            </Text>
            <Text fontSize={["24px", "36px", "55px"]} fontWeight="700">
              Tech Projects I have worked on
            </Text>
          </Box>
          <ProjectCard />
        </Flex>
        <Flex
          flexDir={"column"}
          width={"100%"}
          minW={"320px"}
          alignItems={"center"}
          gap={"16px"}
        >
          <ProjectCard />
          <Button
            padding={"24px 32px"}
            fontSize={"18px"}
            width={"fit-content"}
            bg={"transparent"}
            borderWidth={"1px"}
            borderColor={"primary"}
            borderRadius={0}
            marginTop={"24px"}
          >
            More Projects
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectSection;
