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
import React from "react";
import PatientsTable from "../../components/tables/RedexTable";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import { Search2Icon, DeleteIcon } from "@chakra-ui/icons";
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
            <Button>بحث</Button>
          </HStack>
          <Spacer h={10} />
          <PatientsTable columns={columns}>
            {Array.from({ length: 10 }).map((el, index) => (
              <Tr key={Math.random()}>
                <Td>{++index}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                    />
                    <Text>محمد قبالة</Text>
                  </HStack>
                </Td>
                <Td>0592839122</Td>
                <Td>جنين</Td>
                <Td>اليامون</Td>
                <Td>12</Td>
                <Td>1</Td>
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
