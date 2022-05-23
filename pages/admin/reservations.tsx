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
import { Search2Icon } from "@chakra-ui/icons";
import RedexSelect from "../../components/RedexSelect";
import PatientsTable from "../../components/tables/RedexTable";
import { InfoIcon } from "@chakra-ui/icons";
import { getDays, getMonths, getYears } from "../../utils/dates";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

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
      value: "معلقة",
    },
    {
      key: "approved",
      value: "تمت الموافقة",
    },
    {
      key: "declined",
      value: "تم الالغاء",
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
            <HStack>
              <InputGroup w={250} p={0}>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<Search2Icon color="gray.300" />}
                />
                <Input
                  pr={1}
                  variant="filled"
                  type="text"
                  placeholder="بحث عن الاسم او رقم الهاتف"
                />
              </InputGroup>
              <Button isLoading={loading}>بحث</Button>
            </HStack>
            <HStack>
              <RedexSelect placeholder="السنة" options={years} />
              <RedexSelect placeholder="الشهر" options={months} />
              <RedexSelect placeholder="اليوم" options={days} />
              <RedexSelect placeholder="الحالة" options={status} />
            </HStack>
          </Flex>
          <Spacer h={10} />
          <PatientsTable columns={columns}>
            {results.map((el, index) => (
              <Tr key={Math.random()}>
                <Td>{++index}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Avatar name={el.doctor.name} src={el.doctor.image_url} />
                    <Text>{el.doctor.name}</Text>
                  </HStack>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    <Avatar name={el.patient.name} src={el.patient.image_url} />
                    <Text>{el.patient.name}</Text>
                  </HStack>
                </Td>
                <Td>
                  {el.day}/{el.month}/{el.year}
                </Td>
                <Td>{new Date(el.date).getTime()}</Td>
                <Td>
                  <Badge colorScheme="green">تمت الموافقة</Badge>
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
            ))}
          </PatientsTable>
        </Box>
      </Flex>
    </AdminPanelLayout>
  );
};

export default Reservations;
