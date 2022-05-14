import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const SidebarListItem: NextPage<{
  icon: any;
  text: string;
  isActive: boolean;
  link: string;
}> = ({ icon, text, link, isActive }) => {
  return (
    <Box
      cursor={"pointer"}
      w="100%"
      borderRadius={15}
      bg={isActive ? "#fff" : "transparent"}
      boxShadow={isActive ? `1px 1px 30px 1px #eee` : ""}
      p={"15px"}
    >
      <Link href={link}>
        <HStack spacing={1}>
          <Flex
            p={"4px 4px"}
            bg={isActive ? "#27A8E0" : "#fff"}
            borderRadius={10}
            align={"center"}
            justify={"center"}
          >
            <Icon as={icon} boxSize={5} color={isActive ? "#fff" : "#27A8E0"} />
          </Flex>
          <Text>{text}</Text>
        </HStack>
      </Link>
    </Box>
  );
};

export default SidebarListItem;
