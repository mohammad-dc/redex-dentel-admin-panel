import { InfoIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  HStack,
  IconButton,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { reports_table_columns } from "../../utils/data";
import RedexTable from "../tables/RedexTable";

const ReportsTable = () => {
  return (
    <RedexTable columns={reports_table_columns}>
      {Array.from({ length: 10 }).map((el, index) => (
        <Tr key={Math.random()}>
          <Td>{++index}</Td>
          <Td>
            <HStack spacing={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Text>محمد قبالة</Text>
            </HStack>
          </Td>
          <Td>
            <HStack spacing={2}>
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Text>شمس حمد</Text>
            </HStack>
          </Td>
          <Td>03/06/2022</Td>
          <Td>عدم الاتزام بالمواعيد</Td>
          <Td cursor={"pointer"}>
            {"وتكمن المشكلة في أن عوامل عامة كثيرة يصعب التكهن بها قد تؤدي إلى عدم الوفاء بالموعد المحدد، من بينها عامل التشتت بسبب مهام أخرى أو صعوبات التنقل أو صعوبة الحصول على الواردات المطلوبة، أو الإصابة بمرض، وجميعها عوامل تسهم في حدوث التأخير".substring(
              0,
              10
            ) + "..."}
          </Td>
          <Td>
            <HStack>
              <IconButton
                colorScheme="blue"
                aria-label="info"
                icon={<InfoIcon />}
              />
            </HStack>
          </Td>
        </Tr>
      ))}
    </RedexTable>
  );
};

export default ReportsTable;
