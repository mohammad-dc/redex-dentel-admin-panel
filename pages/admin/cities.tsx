import {
  Box,
  Button,
  Flex,
  Spacer,
  Td,
  Tr,
  Switch,
  IconButton,
  Center,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import PatientsTable from "../../components/tables/RedexTable";
import { EditIcon } from "@chakra-ui/icons";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import NoResults from "../../components/noResults";

const cities = () => {
  const columns = [
    "#",
    "المدينة (العربية)",
    "المدينة (الانجليزية)",
    "الحالة",
    "خيارات",
  ];

  const { loading, results } = useSelector((state: RootState) => state.cities);
  return (
    <AdminPanelLayout pageName="المدن">
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Box p={5} bg={"white"} borderRadius={5} mt={5}>
            <Button>اضافة مدينة</Button>
            <Spacer h={10} />
            {results.length === 0 ? (
              <NoResults />
            ) : (
              <PatientsTable columns={columns}>
                {results.map((el, index) => (
                  <Tr key={Math.random()}>
                    <Td>{++index}</Td>
                    <Td>{el.city_ar}</Td>
                    <Td>{el.city_en}</Td>
                    <Td>
                      <Switch size="md" isChecked={el.active} />
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
            )}
          </Box>
        )}
      </Flex>
    </AdminPanelLayout>
  );
};

export default cities;
