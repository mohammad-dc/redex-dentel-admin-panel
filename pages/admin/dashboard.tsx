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

const Dashboard = () => {
  const list = [
    { name: "الرئيسية", icon: AiFillHome },
    { name: "المرضى", icon: FaUserInjured },
    { name: "الاطباء", icon: FaUserMd },
    { name: "المدن", icon: FaCity },
    { name: "الحجوزات", icon: FaBookmark },
    { name: "الدخل", icon: RiMoneyCnyCircleFill },
    { name: "الابلاغات", icon: MdReport },
  ];

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      bg={"#f7fafc"}
    >
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        overflowY={"auto"}
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Box>
            <VStack spacing={10}>
              <Center p={2}>
                <Box w={70} h={70}>
                  <Image src={Logo} alt="redex dentel" />
                </Box>
                <Text>Redex Dentel</Text>
              </Center>
              <Divider />
              <VStack spacing={3} w="100%">
                {list.map((el) => (
                  <Box key={el.name} w="100%">
                    <SidebarListItem
                      icon={el.icon}
                      text={el.name}
                      isActive={el.name === "الرئيسية"}
                    />
                  </Box>
                ))}
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Flex>
      {/* column 2 */}
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
    </Flex>
  );
};

export default Dashboard;
