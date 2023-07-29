import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

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
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
              width="700px"
              height="600px"
              objectFit="cover"
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
            padding="48px 20px"
          >
            <Box zIndex={5} fontSize={["24px", "36px", "48px", "76px"]}>
              <Text fontWeight="700" lineHeight="normal">
                I'm Laviz Pandey
              </Text>
              <Text fontWeight="700" lineHeight="normal">
                A software developer
              </Text>
              <Text fontWeight="700" color="lightGrey" lineHeight="normal">
                based in Nepal
              </Text>
              <Text
                fontSize={["8px", "12px", "16px", "18px"]}
                fontWeight="400"
                marginTop="32px"
              >
                I'm probably the most passionate designer you will ever get to
                work with. If you have a great project that needs some amazing
                skills, I'm your guy.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
