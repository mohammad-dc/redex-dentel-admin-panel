import {
  IReportsInitialState,
  IReportsReasonsInitialState,
} from "../../interfaces/store/report.interface";
import {
  RecentReportAction,
  ReportAction,
  ReportsReasonsAction,
} from "../actions/action/reports";
import {
  GetRecentReportsTypes,
  GetReportsReasonsTypes,
  GetReportsTypes,
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
