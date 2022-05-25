import { Dispatch } from "react";
import {
  IGetReportsReasonsRequestParams,
  IGetReportsRequestParams,
} from "../../../interfaces/store/report.interface";
import {
  RecentReportAction,
  ReportAction,
  ReportsReasonsAction,
} from "../action/reports";
import {
  GetRecentReportsTypes,
  GetReportsReasonsTypes,
  GetReportsTypes,
} from "../types/reports";
import * as API from "../../../utils/logic/api";

export const getReportsCreators = (params: IGetReportsRequestParams) => {
  return (dispatch: Dispatch<ReportAction | RecentReportAction>) => {
    dispatch({
      type:
        params.type === "recent"
          ? GetRecentReportsTypes.GET_RECENT_REPORTS_LOADING
          : GetReportsTypes.GET_REPORTS_LOADING,
      loading: true,
    });
    const { search, skip, reason } = params;
    API.get(`ar/reports/admin/${params.type}`, {
      search,
      skip,
      reason,
    })
      .then((res) => {
        dispatch({
          type:
            params.type === "recent"
              ? GetRecentReportsTypes.GET_RECENT_REPORTS_SUCCESS
              : GetReportsTypes.GET_REPORTS_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type:
            params.type === "recent"
              ? GetRecentReportsTypes.GET_RECENT_REPORTS_ERROR
              : GetReportsTypes.GET_REPORTS_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};

export const getReportsReasonsCreator = (
  params: IGetReportsReasonsRequestParams
) => {
  return (dispatch: Dispatch<ReportsReasonsAction>) => {
    dispatch({
      type: GetReportsReasonsTypes.GET_REPORTS_REASONS_LOADING,
      loading: true,
    });
    API.get("ar/report/reasons/admin", params)
      .then((res) => {
        dispatch({
          type: GetReportsReasonsTypes.GET_REPORTS_REASONS_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetReportsReasonsTypes.GET_REPORTS_REASONS_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};
