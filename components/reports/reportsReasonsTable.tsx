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

const ReportsReasonsTable = () => {
  return (
    <RedexTable columns={reports_reasons_table_columns}>
      {Array.from({ length: 5 }).map((el, index) => (
        <Tr key={Math.random()}>
          <Td>{++index}</Td>
          <Td>عدم الالتزام بالمواعيد</Td>
          <Td>
            <AvatarGroup size="md" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
          </Td>
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
