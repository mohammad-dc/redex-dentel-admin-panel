import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import RedexTabs from "../../components/tabs";
import AdminPanelLayout from "../../layout/AdminPanelLayout";

const Reports = () => {
  return (
    <AdminPanelLayout pageName="الابلاغات">
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        <Box p={5} bg={"white"} borderRadius={5} mt={5}>
          <RedexTabs />
        </Box>
      </Flex>
    </AdminPanelLayout>
  );
};

export default Reports;
