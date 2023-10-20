import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";
import me from "../../assets/me1.png";
const HeroSection = () => {
  return (
    <Box height={["auto", "auto", "600px", "800px"]}>
      <Box position="relative">
        <Navbar />
        <Box position="relative">
          <Box
            pos={["static", "static", "absolute", "absolute"]}
            zIndex={2}
            height={["auto", "auto", "600px", "800px"]}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Image
              // opacity={"0.8"}
              src={me}
              width="600px"
              height="600px"
              objectFit="cover"
              alt="hero-image"
            />
          </Box>
          <Box
            width={["auto", "auto", "600px", "800px"]}
            bg="level1"
            pos={["static", "static", "absolute", "absolute"]}
            right={0}
            height={["auto", "auto", "800px"]}
            display="flex"
            alignItems="center"
            justifyContent={["center", "center", "center", "flex-end"]}
            padding="24px"
          >
            <Box zIndex={5} fontSize={["24px", "36px", "48px", "76px"]}>
              <Text
                fontSize={["8px", "12px", "16px", "18px"]}
                fontWeight="400"
                marginTop="32px"
                color={"lightGray"}
              >
                Design . Build . Improve
              </Text>
              <Text fontWeight="700" lineHeight="normal">
                I'm Laviz Pandey
              </Text>
              <Text fontWeight="600" lineHeight="normal">
                A software developer
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
