import {
  Box,
  Flex,
  Spacer,
  Td,
  Tr,
  Switch,
  Center,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import AdminPanelLayout from "../../layout/AdminPanelLayout";
import PatientsTable from "../../components/tables/RedexTable";
import NoResults from "../../components/noResults";
import AddCityModal from "../../components/modals/addCityModal";
import UpdateCityModal from "../../components/modals/updateCityModal";
//store
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCitiesCreators } from "../../store";
import { RootState } from "../../store/reducers";

const Cities = () => {
  const columns = [
    "#",
    "المدينة (العربية)",
    "المدينة (الانجليزية)",
    "الحالة",
    "خيارات",
  ];

  const dispatch = useDispatch();
  const { activateCityCreator } = bindActionCreators(
    actionCitiesCreators,
    dispatch
  );
  const { loading, results } = useSelector((state: RootState) => state.cities);
  const operations_city = useSelector(
    (state: RootState) => state.operations_city
  );

  return (
    <AdminPanelLayout pageName="المدن">
      <Flex w={"100%"} flexDir="column" p={5} overflowY={"auto"}>
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Box p={5} bg={"white"} borderRadius={5} mt={5}>
            <AddCityModal />
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
                      <Switch
                        size="md"
                        isDisabled={operations_city.loading}
                        defaultChecked={el.active}
                        onChange={() =>
                          activateCityCreator(
                            el._id,
                            el.active ? "DEACTIVATE" : "ACTIVATE"
                          )
                        }
                      />
                    </Td>
                    <Td>
                      <UpdateCityModal city={el} />
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

export default Cities;
