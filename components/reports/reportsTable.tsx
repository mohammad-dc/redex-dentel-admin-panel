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
import { NextPage } from "next";
import React from "react";
import { IReport } from "../../interfaces/store/report.interface";
import { reports_table_columns } from "../../utils/data";
import RedexTable from "../tables/RedexTable";

const ReportsTable: NextPage<{ data: IReport[] }> = ({ data }) => {
  return (
    <RedexTable columns={reports_table_columns}>
      {data.map((el, index) => (
        <Tr key={Math.random()}>
          <Td>{++index}</Td>
          <Td>
            <HStack spacing={2}>
              <Avatar name={el.doctor.name} src={el.doctor.image_url} />
              <Text>{el.doctor.name}</Text>
            </HStack>
          </Td>
          <Td>
            <HStack spacing={2}>
              <Avatar name={el.patient.name} src={el.patient.image_url} />
              <Text>{el.patient.name}</Text>
            </HStack>
          </Td>
          <Td>
            {el.day}/{el.month}/{el.year}
          </Td>
          <Td>{el.reason}</Td>
          <Td cursor={"pointer"}>{el.content.substring(0, 10) + "..."}</Td>
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
