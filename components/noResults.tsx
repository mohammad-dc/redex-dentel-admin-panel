import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import colors from "../common/colors";

const NoResults = () => {
  return (
    <Box w={"100%"}>
      <Flex justify={"center"} align={"center"} flexDir={"column"}>
        <Icon as={WarningTwoIcon} boxSize={200} color={colors.GRAY} />
        <Text fontSize={"xl"}>لا يوجد نتائج</Text>
      </Flex>
    </Box>
  );
};

export default NoResults;
