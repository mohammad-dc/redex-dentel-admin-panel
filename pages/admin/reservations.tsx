import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import moment from "moment";
import RedexSelect from "../../components/RedexSelect";
import PatientsTable from "../../components/tables/RedexTable";
import { InfoIcon } from "@chakra-ui/icons";
import { getDays, getMonths, getYears } from "../../utils/dates";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { getReservationsStatus } from "../../helper/strings";
import TableSearchInput from "../../components/tables/tableSearchInput";
import { HandleSearchPageName, ReservationStatusAR } from "../../enum";
import { formatAMPM } from "../../helper/date";
import NoResults from "../../components/noResults";

const Reservations = () => {
  const columns = [
    "#",
    "الطبيب",
    "المريض",
    "تاريخ الحجز",
    "موعد الحجز",
    "الحالة",
    "خيارات",
  ];
  const years = getYears();
  const months = getMonths();
  const days = getDays();
  const status = [
    {
      key: "pending",
      value: ReservationStatusAR.PENDING,
    },
    {
      key: "approved",
      value: ReservationStatusAR.APPROVED,
    },
    {
      key: "declined",
      value: ReservationStatusAR.DECLINED,
    },
    {
      key: "canceled",
      value: ReservationStatusAR.CANCELED,
    },
  ];

  const { loading, results } = useSelector(
    (state: RootState) => state.reservations
  );
  return (
    <AdminPanelLayout pageName="الحجوزات">
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        <Box p={5} bg={"white"} borderRadius={5} mt={5}>
          <Flex justify={"space-between"} align="center">
            <TableSearchInput
              loading={loading}
              pageName={HandleSearchPageName.RESERVATIONS}
              spacer={false}
            />
            <HStack>
              <RedexSelect placeholder="السنة" options={years} />
              <RedexSelect placeholder="الشهر" options={months} />
              <RedexSelect placeholder="اليوم" options={days} />
              <RedexSelect placeholder="الحالة" options={status} />
            </HStack>
          </Flex>
          <Spacer h={10} />
          {results.length === 0 ? (
            <NoResults />
          ) : (
            <PatientsTable columns={columns}>
              {results.map((el, index) => {
                const { color, text } = getReservationsStatus(el.status);
                return (
                  <Tr key={Math.random()}>
                    <Td>{++index}</Td>
                    <Td>
                      <HStack spacing={2}>
                        <Avatar
                          name={el.doctor.name}
                          src={el.doctor.image_url}
                        />
                        <Text>{el.doctor.name}</Text>
                      </HStack>
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <Avatar
                          name={el.patient.name}
                          src={el.patient.image_url}
                        />
                        <Text>{el.patient.name}</Text>
                      </HStack>
                    </Td>
                    <Td>
                      {el.day}/{el.month}/{el.year}
                    </Td>
                    <Td>{formatAMPM(new Date(el.date))}</Td>
                    <Td>
                      <Badge colorScheme={color}>{text}</Badge>
                    </Td>
                    <Td>
                      <HStack>
                        <IconButton
                          colorScheme="blue"
                          aria-label="info"
                          icon={<InfoIcon />}
                        />
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </PatientsTable>
          )}
        </Box>
      </Flex>
    </AdminPanelLayout>
  );
};

export default Reservations;
