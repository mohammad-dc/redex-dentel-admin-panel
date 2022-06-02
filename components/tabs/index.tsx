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
import { HandleSearchPageName } from "../../enum";
//store
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import NoResults from "../noResults";
import AddReportReasonModel from "../modals/reports/addReportReasonModel";

const RedexTabs = () => {
  const reports = useSelector((state: RootState) => state.reports);
  const recent_reports = useSelector(
    (state: RootState) => state.recent_reports
  );
  const report_reasons = useSelector(
    (state: RootState) => state.reports_reasons
  );

  return (
    <Tabs variant="line" colorScheme="blue">
      <TabList>
        {tabs_titles.map((el) => (
          <Tab key={el}>{el}</Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <TableSearchInput
            loading={recent_reports.loading}
            pageName={HandleSearchPageName.REPORTS}
            reportsType="recent"
          />
          {recent_reports.results.length === 0 ? (
            <NoResults />
          ) : (
            <ReportsTable data={recent_reports.results} />
          )}
        </TabPanel>
        <TabPanel>
          <TableSearchInput
            loading={reports.loading}
            pageName={HandleSearchPageName.REPORTS}
            reportsType="all"
          />
          {reports.results.length === 0 ? (
            <NoResults />
          ) : (
            <ReportsTable data={reports.results} />
          )}
        </TabPanel>
        <TabPanel>
          <AddReportReasonModel />
          <Spacer h={5} />
          <ReportsReasonsTable data={report_reasons.results} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RedexTabs;
