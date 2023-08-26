import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

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
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box width="366px" minWidth="250px">
          <Text fontSize="117px" fontWeight="400" color="lightGrey">
            01
          </Text>
          <Text fontSize="24px" fontWeight="700">
            <Box as="span" color="green">
              Google, {""}
            </Box>
            Interaction Designer
          </Text>
          <Text fontSize="16px" fontWeight="400">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </Text>
        </Box>
        <Box width="366px" minWidth="250px">
          <Text fontSize="117px" fontWeight="400" color="lightGrey">
            01
          </Text>
          <Text fontSize="24px" fontWeight="700">
            <Box as="span" color="green">
              Google, {""}
            </Box>
            Interaction Designer
          </Text>
          <Text fontSize="16px" fontWeight="400">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </Text>
        </Box>
        <Box width="366px" minWidth="250px">
          <Text fontSize="117px" fontWeight="400" color="lightGrey">
            01
          </Text>
          <Text fontSize="24px" fontWeight="700">
            <Box as="span" color="green">
              Google, {""}
            </Box>
            Interaction Designer
          </Text>
          <Text fontSize="16px" fontWeight="400">
            I currently am the lead designer on the interaction design team for
            Google Play.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkSection;
