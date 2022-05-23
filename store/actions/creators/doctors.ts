import { Dispatch } from "react";
import { IGetDoctorsRequestParams } from "../../../interfaces/store/doctor.interface";
import { DoctorAction } from "../action/doctor";
import { GetDoctorsTypes } from "../types/doctors";
import * as API from "../../../utils/logic/api";

export const getDoctorsCreator = (params: IGetDoctorsRequestParams) => {
  return (dispatch: Dispatch<DoctorAction>) => {
    dispatch({
      type: GetDoctorsTypes.GET_DOCTORS_LOADING,
      loading: true,
    });

    API.get("ar/users/admin/doctors", params)
      .then((res) => {
        dispatch({
          type: GetDoctorsTypes.GET_DOCTORS_SUCCESS,
          loading: false,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetDoctorsTypes.GET_DOCTORS_ERROR,
          loading: false,
          error: error.response.data,
        });
      });
  };
};
