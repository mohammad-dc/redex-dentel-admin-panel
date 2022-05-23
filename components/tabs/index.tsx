import React from "react";
import {
  Button,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { tabs_titles } from "../../utils/data";
import ReportsTable from "../reports/reportsTable";
import TableSearchInput from "../tables/tableSearchInput";
import ReportsReasonsTable from "../reports/reportsReasonsTable";

const RedexTabs = () => {
  return (
    <Tabs variant="line" colorScheme="blue">
      <TabList>
        {tabs_titles.map((el) => (
          <Tab key={el}>{el}</Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableSearchInput />
          <ReportsTable />
        </TabPanel>
        <TabPanel>
          <TableSearchInput />
          <ReportsTable />
        </TabPanel>
        <TabPanel>
          <Button>اضافة سبب</Button>
          <Spacer h={5} />
          <ReportsReasonsTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RedexTabs;
