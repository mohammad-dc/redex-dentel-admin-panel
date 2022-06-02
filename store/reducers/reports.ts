import {
  IReportReasonsOperationsInitialState,
  IReportsInitialState,
  IReportsReasonsInitialState,
} from "../../interfaces/store/report.interface";
import {
  RecentReportAction,
  ReportAction,
  ReportsReasonsAction,
  ReportsReasonsOperationsActions,
} from "../actions/action/reports";
import {
  GetRecentReportsTypes,
  GetReportsReasonsTypes,
  GetReportsTypes,
  ReportsReasonsOperationsTypes,
} from "../actions/types/reports";

const reportsInitialState: IReportsInitialState = {
  loading: false,
  results: [],
  error: null,
};

const recentReportsInitialState: IReportsInitialState = {
  loading: false,
  results: [],
  error: null,
};

const reportsReasonsInitialState: IReportsReasonsInitialState = {
  loading: false,
  results: [],
  error: null,
};

const reportReasonsOperationsInitialState: IReportReasonsOperationsInitialState =
  {
    loading: false,
    action: "NONE",
    success: false,
    error: null,
  };

export const reportsReducer = (
  state: IReportsInitialState = reportsInitialState,
  action: ReportAction
) => {
  switch (action.type) {
    case GetReportsTypes.GET_REPORTS_LOADING:
      return { ...state, loading: true };
    case GetReportsTypes.GET_REPORTS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetReportsTypes.GET_REPORTS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const recentReportsReducer = (
  state: IReportsInitialState = recentReportsInitialState,
  action: RecentReportAction
) => {
  switch (action.type) {
    case GetRecentReportsTypes.GET_RECENT_REPORTS_LOADING:
      return { ...state, loading: true };
    case GetRecentReportsTypes.GET_RECENT_REPORTS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetRecentReportsTypes.GET_RECENT_REPORTS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const reportsReasonsReducer = (
  state: IReportsReasonsInitialState = reportsReasonsInitialState,
  action: ReportsReasonsAction
) => {
  switch (action.type) {
    case GetReportsReasonsTypes.GET_REPORTS_REASONS_LOADING:
      return { ...state, loading: true };
    case GetReportsReasonsTypes.GET_REPORTS_REASONS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetReportsReasonsTypes.GET_REPORTS_REASONS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const reportReasonsOperationsReducer = (
  state: IReportReasonsOperationsInitialState = reportReasonsOperationsInitialState,
  action: ReportsReasonsOperationsActions
) => {
  switch (action.type) {
    case ReportsReasonsOperationsTypes.OPERATION_REPORTS_REASONS_LOADING:
      return { ...state, loading: true, action: action.action };
    case ReportsReasonsOperationsTypes.OPERATION_REPORTS_REASONS_SUCCESS:
      return { ...state, loading: false, success: action.success, error: null };
    case ReportsReasonsOperationsTypes.OPERATION_REPORTS_REASONS_ERROR:
      return { ...state, loading: false, error: action.error, success: false };
    default:
      return state;
  }
};
