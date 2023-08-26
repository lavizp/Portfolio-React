import React from "react";
import { Box, Flex, MenuIcon, Text } from "@chakra-ui/react";
import Database from "../icons/Database";
import { skillsData } from "../../Data/Skills";

const SkillSection = () => {
  return (
    <Flex
      justifyContent={["space-between"]}
      flexWrap={["wrap", "wrap", "nowrap", "nowrap"]}
      paddingX={["20px", "20px", "74px"]}
      paddingY="100px"
      gap={"48px"}
    >
      <Flex
        flexDir={"column"}
        gap={"24px"}
        width={["100%", "100%", "250px", "350px"]}
      >
        <Text fontWeight="700" lineHeight="normal" fontSize={"55px"}>
          Skillset
        </Text>
        <Text fontSize="18px" fontWeight="400" color="lightGrey">
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </Text>
      </Flex>
      <Flex
        flexWrap={"wrap"}
        gap={"48px"}
        flex={1}
        justifyContent={["flex-start", "flex-start", "flex-end", "flex-end"]}
      >
        {skillsData.map((data) => (
          <Flex
            flexDir={"column"}
            gap={"18px"}
            minW={"250px"}
            maxW={"300px"}
            key={data.id}
          >
            {data.icon}
            <Text fontWeight="700" lineHeight="normal" fontSize={"24px"}>
              {data.title}
            </Text>
            <Text fontSize="16px" fontWeight="400" color="lightGrey">
              {data.description}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SkillSection;
