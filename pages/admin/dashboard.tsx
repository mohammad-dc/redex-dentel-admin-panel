import React from "react";
import {
  Flex,
  Text,
  Divider,
  Box,
  VStack,
  Center,
  Spacer,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import {
  FaUserMd,
  FaUserInjured,
  FaCity,
  FaBookmark,
  FaMoneyBillWave,
} from "react-icons/fa";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import SidebarListItem from "../../components/SidebarListItem";
import StatusDashboardCard from "../../components/cards/StatusDashboardCard";
import CurvedColumnsChart from "../../components/charts/CurvedColumnsChart";
import DashboardNav from "../../components/DashboardNav";
import DoughnutDashboardChart from "../../components/charts/doughnutDashboardChart";
import AdminPanelLayout from "../../layout/AdminPanelLayout";

const Dashboard = () => {
  return (
    <AdminPanelLayout pageName={"الرئيسية"}>
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        <DashboardNav />

        <Box p={5} bg={"white"} borderRadius={5} mt={10}>
          <VStack>
            <Text>احصائيات تاريخ الانضمام</Text>
            <CurvedColumnsChart />
          </VStack>
        </Box>
        <SimpleGrid minChildWidth="200px" spacing={5}>
          <GridItem>
            <Box p={5} bg={"white"} borderRadius={5} mt={10}>
              <Text>احصائيات المدن التي ينتمي اليها الاطباء</Text>
              <DoughnutDashboardChart />
            </Box>
          </GridItem>
          <GridItem>
            <Box p={5} bg={"white"} borderRadius={5} mt={10}>
              <Text>احصائيات المدن التي ينتمي اليها المرضى</Text>
              <DoughnutDashboardChart />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Flex>
    </AdminPanelLayout>
  );
};

export default Dashboard;
