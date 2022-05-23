import {
  Avatar,
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
import React, { useEffect } from "react";
import PatientsTable from "../../components/tables/RedexTable";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import { Search2Icon, DeleteIcon } from "@chakra-ui/icons";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

const Patients = () => {
  const columns = [
    "#",
    "المريض",
    "الهاتف",
    "المدينة",
    "العنوان",
    "الحجوزات الكلية",
    "حجوزات الشهر",
    "خيارات",
  ];

  const { loading, results, error } = useSelector(
    (state: RootState) => state.patients
  );

  return (
    <AdminPanelLayout pageName={"المرضى"}>
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        <Box p={5} bg={"white"} borderRadius={5} mt={5}>
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
                placeholder="بحث عن الاسم"
              />
            </InputGroup>
            <Button isLoading={loading}>بحث</Button>
          </HStack>
          <Spacer h={10} />
          <PatientsTable columns={columns}>
            {results.map((el, index) => (
              <Tr key={Math.random()}>
                <Td>{++index}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Avatar name={el.name} src={el.image_url} />
                    <Text>{el.name}</Text>
                  </HStack>
                </Td>
                <Td>{el.phone}</Td>
                <Td>{el.city}</Td>
                <Td>{el.address}</Td>
                <Td>{el.total_reservations_count}</Td>
                <Td>{el.reservations_month_count}</Td>
                <Td>
                  <IconButton
                    colorScheme="red"
                    aria-label="delete"
                    icon={<DeleteIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </PatientsTable>
          <Spacer h={5} />
        </Box>
      </Flex>
    </AdminPanelLayout>
  );
};

export default Patients;
