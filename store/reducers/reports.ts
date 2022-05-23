import { IReportsInitialState } from "../../interfaces/store/report.interface";
import { ReportAction } from "../actions/action/reports";
import { GetReportsTypes } from "../actions/types/reports";

const reportsInitialState: IReportsInitialState = {
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
