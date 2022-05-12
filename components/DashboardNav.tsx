import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import StatusDashboardCard from "./cards/StatusDashboardCard";
import {
  FaUserMd,
  FaUserInjured,
  FaBookmark,
  FaMoneyBillWave,
} from "react-icons/fa";

const DashboardNav = () => {
  return (
    <Box>
      <SimpleGrid minChildWidth="200px" spacing={5}>
        <GridItem>
          <StatusDashboardCard
            icon={FaUserMd}
            title="الاطباء"
            value={230}
            bg={"linear-gradient(#e66465, #9198e5)"}
          />
        </GridItem>
        <GridItem>
          <StatusDashboardCard
            icon={FaUserInjured}
            title="المرضى"
            value={150}
            bg={"linear-gradient(#4da0b0, #d39d38)"}
          />
        </GridItem>
        <GridItem>
          <StatusDashboardCard
            icon={FaBookmark}
            title="الحجوزات"
            value={150}
            bg={"linear-gradient(#9B4CFC, #1DE1D0)"}
          />
        </GridItem>
        <GridItem>
          <StatusDashboardCard
            icon={FaMoneyBillWave}
            title="الدخل الشهري"
            value={3000}
            bg={"linear-gradient(#7b4397, #dc2430)"}
          />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default DashboardNav;
