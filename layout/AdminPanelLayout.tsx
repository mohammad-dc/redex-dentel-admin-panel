import React, { Children, ReactNode, useEffect } from "react";
import { Flex, Text, Divider, Box, VStack, Center } from "@chakra-ui/react";
import { FaUserMd, FaUserInjured, FaCity, FaBookmark } from "react-icons/fa";
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { NextPage } from "next";
import Image from "next/image";
import SidebarListItem from "../components/SidebarListItem";
import Logo from "../assets/images/logo.png";
//store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  actionReservationsCreators,
  actionCitiesCreators,
  actionDoctorsCreators,
  actionPatientsCreators,
  actionReportsCreators,
  actionAppCreators,
} from "../store";

const AdminPanelLayout: NextPage<{
  children: ReactNode;
  pageName: string;
}> = ({ children, pageName }) => {
  const dispatch = useDispatch();

  const { getReservationsCreator } = bindActionCreators(
    actionReservationsCreators,
    dispatch
  );
  const { getCitiesCreator } = bindActionCreators(
    actionCitiesCreators,
    dispatch
  );
  const { getDoctorsCreator } = bindActionCreators(
    actionDoctorsCreators,
    dispatch
  );
  const { getPatientsCreator } = bindActionCreators(
    actionPatientsCreators,
    dispatch
  );
  const { getReportsCreators, getReportsReasonsCreator } = bindActionCreators(
    actionReportsCreators,
    dispatch
  );

  const {
    getUsersCitiesCreator,
    getReservationsCountsCreator,
    getUsersCountsCreator,
    getUsersJoiningCreator,
  } = bindActionCreators(actionAppCreators, dispatch);

  const list = [
    { name: "الرئيسية", link: "/admin/dashboard", icon: AiFillHome },
    { name: "المرضى", link: "/admin/patients", icon: FaUserInjured },
    { name: "الاطباء", link: "/admin/doctors", icon: FaUserMd },
    { name: "المدن", link: "/admin/cities", icon: FaCity },
    { name: "الحجوزات", link: "/admin/reservations", icon: FaBookmark },
    { name: "الدخل", link: "/admin/incomes", icon: RiMoneyCnyCircleFill },
    { name: "الابلاغات", link: "/admin/reports", icon: MdReport },
  ];

  useEffect(() => {
    getReservationsCreator({});
    getCitiesCreator();
    getDoctorsCreator({});
    getPatientsCreator({});
    getReportsCreators({ type: "recent" });
    getReportsCreators({ type: "all" });
    getReportsReasonsCreator({});
    getUsersCitiesCreator("doctor");
    getUsersCitiesCreator("patient");
    getReservationsCountsCreator();
    getUsersCountsCreator();
    getUsersJoiningCreator();
  }, []);
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
                      link={el.link}
                      isActive={el.name === pageName}
                    />
                  </Box>
                ))}
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
};

export default AdminPanelLayout;
