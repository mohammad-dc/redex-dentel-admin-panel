import React from "react";
import {
  Flex,
  Text,
  Box,
  VStack,
  SimpleGrid,
  GridItem,
  Center,
  Spinner,
} from "@chakra-ui/react";

import CurvedColumnsChart from "../../components/charts/CurvedColumnsChart";
import DashboardNav from "../../components/DashboardNav";
import DoughnutDashboardChart from "../../components/charts/DoughnutDashboardChart";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

const Dashboard = () => {
  const users_counts = useSelector(
    (state: RootState) => state.app_users_counts
  );
  const users_joining = useSelector(
    (state: RootState) => state.app_users_joining
  );
  const reservations_counts = useSelector(
    (state: RootState) => state.app_reservations_counts
  );
  const doctors_cities = useSelector(
    (state: RootState) => state.app_doctors_cities
  );
  const patients_cities = useSelector(
    (state: RootState) => state.app_patients_cities
  );

  const counts = {
    doctors: users_counts?.results[0]?.count || 0,
    patients: users_counts?.results[1]?.count || 0,
    reservations: reservations_counts?.result || 0,
  };

  return (
    <AdminPanelLayout pageName={"الرئيسية"}>
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        {users_counts.loading ||
        users_joining.loading ||
        reservations_counts.loading ||
        doctors_cities.loading ||
        patients_cities.loading ? (
          <Flex
            justify={"center"}
            align={"center"}
            flexDir={"column"}
            h={"100vh"}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="black"
              size="xl"
            />
            <Text fontSize={"2xl"}>يتم تحميل المعومات</Text>
          </Flex>
        ) : (
          <Box>
            <DashboardNav counts={counts} />

            <Box p={5} bg={"white"} borderRadius={5} mt={10}>
              <VStack>
                <Text>احصائيات تاريخ الانضمام</Text>
                <CurvedColumnsChart results={users_joining.results} />
              </VStack>
            </Box>
            <SimpleGrid minChildWidth="200px" spacing={5}>
              <GridItem>
                <Box p={5} bg={"white"} borderRadius={5} mt={10}>
                  <Text>احصائيات المدن التي ينتمي اليها الاطباء</Text>
                  <DoughnutDashboardChart
                    label={"احصائيات المدن التي ينتمي اليها الاطباء"}
                    results={doctors_cities.results}
                  />
                </Box>
              </GridItem>
              <GridItem>
                <Box p={5} bg={"white"} borderRadius={5} mt={10}>
                  <Text>احصائيات المدن التي ينتمي اليها المرضى</Text>
                  <DoughnutDashboardChart
                    label={"احصائيات المدن التي ينتمي اليها المرضى"}
                    results={patients_cities.results}
                  />
                </Box>
              </GridItem>
            </SimpleGrid>
          </Box>
        )}
      </Flex>
    </AdminPanelLayout>
  );
};

export default Dashboard;
