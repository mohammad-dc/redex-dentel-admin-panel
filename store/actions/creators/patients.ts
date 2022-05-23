import { Dispatch } from "react";
import { PatientAction } from "../action/patients";
import { GetPatientsTypes } from "../types/patients";
import * as API from "../../../utils/logic/api";
import { IGetPatientsRequestParams } from "../../../interfaces/store/patients.interface";

export const getPatientsCreator = (params: IGetPatientsRequestParams) => {
  return (dispatch: Dispatch<PatientAction>) => {
    dispatch({
      type: GetPatientsTypes.GET_PATIENTS_LOADING,
      loading: true,
    });

    API.get("ar/users/admin/patients", params)
      .then((res) => {
        dispatch({
          type: GetPatientsTypes.GET_PATIENTS_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetPatientsTypes.GET_PATIENTS_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};
