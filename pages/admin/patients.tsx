import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import PatientsTable from "../../components/tables/RedexTable";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import { DeleteIcon } from "@chakra-ui/icons";
import RedexAlert from "../../components/alert";
import { HandleSearchPageName } from "../../enum";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import TableSearchInput from "../../components/tables/tableSearchInput";
import NoResults from "../../components/noResults";
import DeleteModal from "../../components/modals/deleteModal";

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
        {error && <RedexAlert status="error" msg={error.message} />}
        <Box p={5} bg={"white"} borderRadius={5} mt={5}>
          <TableSearchInput
            loading={loading}
            pageName={HandleSearchPageName.PATIENTS}
          />
          {results.length === 0 ? (
            <NoResults />
          ) : (
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
                    <DeleteModal />
                  </Td>
                </Tr>
              ))}
            </PatientsTable>
          )}
          <Spacer h={5} />
        </Box>
      </Flex>
    </AdminPanelLayout>
  );
};

export default Patients;
