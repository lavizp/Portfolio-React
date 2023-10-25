import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { experienceData } from "../../Data/ExperiencesData";
const WorkSection = () => {
  return (
    <Box paddingX={["20px", "20px", "74px"]} paddingY="150px">
      <Box width={["90%", "80%", "70%"]}>
        <Text fontSize="16px" fontWeight="700" color="lightGrey">
          Work Experiences
        </Text>
        <Text fontSize={["24px", "36px", "55px"]} fontWeight="700">
          Companies I have worked for in the past.
        </Text>
      </Box>
      <Flex
        justifyContent={
          experienceData.length > 2 ? "space-between" : "flex-start"
        }
        flexWrap="wrap"
        gap={experienceData.length > 2 ? "0" : "24px"}
      >
        {experienceData.map((item) => {
          return (
            <Box width="366px" minWidth="250px" key={item.id}>
              <Text fontSize="117px" fontWeight="400" color="lightGrey">
                {item.id}
              </Text>
              <Text fontSize="24px" fontWeight="700">
                <Box as="span" color={item.color}>
                  {item.company}{" "}
                </Box>
                {","}
                {item.position}
              </Text>
              <Text fontSize="16px" fontWeight="400">
                {item.roles}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default WorkSection;
