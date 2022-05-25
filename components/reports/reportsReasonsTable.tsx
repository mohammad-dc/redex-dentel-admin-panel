import { DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  HStack,
  IconButton,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { reports_reasons_table_columns } from "../../utils/data";
import RedexTable from "../tables/RedexTable";
import { NextPage } from "next";
import { IReportsReasons } from "../../interfaces/store/report.interface";

const ReportsReasonsTable: NextPage<{ data: IReportsReasons[] }> = ({
  data,
}) => {
  return (
    <RedexTable columns={reports_reasons_table_columns}>
      {data.map((el, index) => (
        <Tr key={Math.random()}>
          <Td>{++index}</Td>
          <Td>{el.reason_ar}</Td>
          <Td>{el.reason_en}</Td>
          <Td>{el.reports_count}</Td>
          <Td>
            <HStack>
              <IconButton
                colorScheme="red"
                aria-label="delete"
                icon={<DeleteIcon />}
              />
            </HStack>
          </Td>
        </Tr>
      ))}
    </RedexTable>
  );
};

export default ReportsReasonsTable;
