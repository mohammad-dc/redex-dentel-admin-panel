import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

import { NextPage } from "next";

const RedexTable: NextPage<{ children: ReactNode; columns: Array<string> }> = ({
  children,
  columns,
}) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((el) => (
              <Th key={el}>{el}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
        <Tfoot>
          <Tr>
            {columns.map((el) => (
              <Th key={el}>{el}</Th>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default RedexTable;
