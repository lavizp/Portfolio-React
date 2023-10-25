import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import gihtubImage from "../../assets/github.png";

const GithubSection = () => {
  return (
    <Box paddingX={["20px", "20px", "74px"]} paddingY="150px">
      <Box marginBottom={"24px"}>
        <Text fontSize="55px" fontWeight="700">
          MY GITHUB
        </Text>
        <Text
          fontSize={["18px", "18px", "18px"]}
          fontWeight="400"
          color="lightGrey"
        >
          Every Github account is made with love. Do checkout my work.
        </Text>
      </Box>
      <Text
        fontSize={["18px", "18px", "18px"]}
        fontWeight="400"
        cursor={"pointer"}
      >
        <u>Follow me on Github</u>
      </Text>
      <Image
        src={gihtubImage}
        objectFit="fill"
        alt="hero-image"
        borderRadius={"20px"}
        marginTop={"24px"}
      />
    </Box>
  );
};

export default GithubSection;
