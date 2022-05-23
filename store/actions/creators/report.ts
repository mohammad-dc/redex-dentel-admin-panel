import { Dispatch } from "react";
import { IGetReportsRequestParams } from "../../../interfaces/store/report.interface";
import { ReportAction } from "../action/reports";
import { GetReportsTypes } from "../types/reports";
import * as API from "../../../utils/logic/api";

export const getReportsCreators = (params: IGetReportsRequestParams) => {
  return (dispatch: Dispatch<ReportAction>) => {
    dispatch({
      type: GetReportsTypes.GET_REPORTS_LOADING,
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
          type: GetReportsTypes.GET_REPORTS_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetReportsTypes.GET_REPORTS_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};
