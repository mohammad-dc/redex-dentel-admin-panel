import { IReport } from "../../../interfaces/store/report.interface";
import { GetReportsTypes } from "../types/reports";

interface IGetReportsLoadingAction {
  type: GetReportsTypes.GET_REPORTS_LOADING;
  loading: boolean;
}

interface IGetReportsSuccessAction {
  type: GetReportsTypes.GET_REPORTS_SUCCESS;
  loading: boolean;
  payload: IReport[];
}

interface IGetReportsErrorAction {
  type: GetReportsTypes.GET_REPORTS_ERROR;
  loading: boolean;
  error: Error | null;
}

export type ReportAction =
  | IGetReportsLoadingAction
  | IGetReportsSuccessAction
  | IGetReportsErrorAction;
