import {
  Box,
  Button,
  Flex,
  Spacer,
  Td,
  Tr,
  Switch,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import PatientsTable from "../../components/tables/RedexTable";
import { EditIcon } from "@chakra-ui/icons";

const cities = () => {
  const columns = ["#", "المدينة", "الحالة", "خيارات"];

  return (
    <AdminPanelLayout pageName="المدن">
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        <Box p={5} bg={"white"} borderRadius={5} mt={5}>
          <Button>اضافة مدينة</Button>
          <Spacer h={10} />
          <PatientsTable columns={columns}>
            {Array.from({ length: 8 }).map((el, index) => (
              <Tr key={Math.random()}>
                <Td>{++index}</Td>
                <Td>جنين</Td>
                <Td>
                  <Switch size="md" />
                </Td>
                <Td>
                  <IconButton
                    colorScheme="orange"
                    aria-label="edit"
                    icon={<EditIcon />}
                  />
                </Td>
              </Tr>
            ))}
          </PatientsTable>
        </Box>
      </Flex>
    </AdminPanelLayout>
  );
};

export default cities;
