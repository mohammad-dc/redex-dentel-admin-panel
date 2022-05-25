import React, { useEffect } from "react";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { NextPage } from "next";
import { ITableSearchInputProps } from "../../interfaces/components.interface";
import { SearchTypes } from "../../store/actions/types/search";
//store
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  actionSearchCreators,
  actionDoctorsCreators,
  actionPatientsCreators,
  actionReportsCreators,
  actionReservationsCreators,
} from "../../store";
import { RootState } from "../../store/reducers";
import { HandleSearchPageName } from "../../enum";

const TableSearchInput: NextPage<ITableSearchInputProps> = ({
  loading,
  pageName,
  reportsType,
  spacer = true,
}) => {
  const dispatch = useDispatch();
  const { addToSearchCreator } = bindActionCreators(
    actionSearchCreators,
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
  const { getReportsCreators } = bindActionCreators(
    actionReportsCreators,
    dispatch
  );
  const { getReservationsCreator } = bindActionCreators(
    actionReservationsCreators,
    dispatch
  );
  const { search, day, month, year, status } = useSelector(
    (state: RootState) => state.search
  );

  return (
    <div>
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
            value={search ? search : ""}
            onChange={(e) =>
              addToSearchCreator({
                type: SearchTypes.ADD_SEARCH,
                payload: e.target.value,
              })
            }
          />
        </InputGroup>
        <Button
          isLoading={loading}
          onClick={() => {
            if (pageName === HandleSearchPageName.DOCTORS)
              getDoctorsCreator({ search, skip: 0 });

            if (pageName === HandleSearchPageName.PATIENTS)
              getPatientsCreator({ search, skip: 0 });

            if (pageName === HandleSearchPageName.REPORTS)
              getReportsCreators({
                type: reportsType as string,
                search,
                skip: 0,
              });

            if (pageName === HandleSearchPageName.RESERVATIONS)
              getReservationsCreator({
                search,
                day,
                month,
                year,
                status,
                skip: 0,
              });
          }}
        >
          بحث
        </Button>
      </HStack>
      {spacer && <Spacer h={10} />}
    </div>
  );
};

export default TableSearchInput;
