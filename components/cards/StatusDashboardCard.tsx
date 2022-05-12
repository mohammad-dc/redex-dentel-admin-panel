import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const StatusDashboardCard: NextPage<{
  icon: any;
  title: string;
  value: number;
  bg: string;
}> = ({ icon, title, value, bg }) => {
  return (
    <Box
      p={"20px 30px"}
      color={"white"}
      borderRadius={10}
      bg={bg}
      boxShadow={"1px 1px 20px 1px #ccc"}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Icon as={icon} />
        <VStack>
          <Text>{title}</Text>
          <Text>{value}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default StatusDashboardCard;
