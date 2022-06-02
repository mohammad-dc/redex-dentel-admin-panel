import {
  IReport,
  IReportsReasons,
} from "../../../interfaces/store/report.interface";
import { ReportOperationTypes } from "../../../types";
import {
  GetRecentReportsTypes,
  GetReportsReasonsTypes,
  GetReportsTypes,
  ReportsReasonsOperationsTypes,
} from "../types/reports";

//reports
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

//recent reports
interface IGetRecentReportsLoadingAction {
  type: GetRecentReportsTypes.GET_RECENT_REPORTS_LOADING;
  loading: boolean;
}

interface IGetRecentReportsSuccessAction {
  type: GetRecentReportsTypes.GET_RECENT_REPORTS_SUCCESS;
  loading: boolean;
  payload: IReport[];
}

interface IGetRecentReportsErrorAction {
  type: GetRecentReportsTypes.GET_RECENT_REPORTS_ERROR;
  loading: boolean;
  error: Error | null;
}

//reasons reports
interface IGetReportsReasonsLoadingAction {
  type: GetReportsReasonsTypes.GET_REPORTS_REASONS_LOADING;
  loading: boolean;
}

interface IGetReportsReasonsSuccessAction {
  type: GetReportsReasonsTypes.GET_REPORTS_REASONS_SUCCESS;
  loading: boolean;
  payload: IReportsReasons[];
}

interface IGetReportsReasonsErrorAction {
  type: GetReportsReasonsTypes.GET_REPORTS_REASONS_ERROR;
  loading: boolean;
  error: Error | null;
}

//operation reasons reports
interface IOperationReportsReasonsLoadingAction {
  type: ReportsReasonsOperationsTypes.OPERATION_REPORTS_REASONS_LOADING;
  loading: boolean;
  action: ReportOperationTypes;
}

interface IOperationReportsReasonsSuccessAction {
  type: ReportsReasonsOperationsTypes.OPERATION_REPORTS_REASONS_SUCCESS;
  loading: boolean;
  success: boolean;
}

interface IOperationReportsReasonsErrorAction {
  type: ReportsReasonsOperationsTypes.OPERATION_REPORTS_REASONS_ERROR;
  loading: boolean;
  error: Error | null;
}

export type ReportAction =
  | IGetReportsLoadingAction
  | IGetReportsSuccessAction
  | IGetReportsErrorAction;

export type RecentReportAction =
  | IGetRecentReportsLoadingAction
  | IGetRecentReportsSuccessAction
  | IGetRecentReportsErrorAction;

export type ReportsReasonsAction =
  | IGetReportsReasonsLoadingAction
  | IGetReportsReasonsSuccessAction
  | IGetReportsReasonsErrorAction;

export type ReportsReasonsOperationsActions =
  | IOperationReportsReasonsLoadingAction
  | IOperationReportsReasonsSuccessAction
  | IOperationReportsReasonsErrorAction;
