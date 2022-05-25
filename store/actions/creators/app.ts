import { Dispatch } from "react";
import {
  DoctorsCitiesAction,
  PatientsCitiesAction,
  ReservationsCountsAction,
  UsersCountsAction,
  UsersJoiningAction,
} from "../action/app";
import {
  GetDoctorsCitiesTypes,
  GetPatientsCitiesTypes,
  GetReservationsCountsTypes,
  GetUsersCountsTypes,
  GetUsersJoiningTypes,
} from "../types/app";
import * as API from "../../../utils/logic/api";

export const getUsersCountsCreator = () => {
  return (dispatch: Dispatch<UsersCountsAction>) => {
    dispatch({
      type: GetUsersCountsTypes.GET_USERS_COUNTS_LOADING,
      loading: true,
    });

    API.get("ar/users/admin/count", {})
      .then((res) => {
        dispatch({
          type: GetUsersCountsTypes.GET_USERS_COUNTS_SUCCESS,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetUsersCountsTypes.GET_USERS_COUNTS_ERROR,
          error: error.response.data,
        });
      });
  };
};

export const getUsersJoiningCreator = () => {
  return (dispatch: Dispatch<UsersJoiningAction>) => {
    dispatch({
      type: GetUsersJoiningTypes.GET_USERS_JOINING_LOADING,
      loading: true,
    });

    API.get("ar/users/admin/statistics/joining", {})
      .then((res) => {
        dispatch({
          type: GetUsersJoiningTypes.GET_USERS_JOINING_SUCCESS,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetUsersJoiningTypes.GET_USERS_JOINING_ERROR,
          error: error.response.data,
        });
      });
  };
};

export const getReservationsCountsCreator = () => {
  return (dispatch: Dispatch<ReservationsCountsAction>) => {
    dispatch({
      type: GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_LOADING,
      loading: true,
    });

    API.get("ar/reservations/admin/count", {})
      .then((res) => {
        dispatch({
          type: GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_SUCCESS,
          payload: res.data.response.result,
        });
      })
      .catch((error) => {
        dispatch({
          type: GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_ERROR,
          error: error.response.data,
        });
      });
  };
};

export const getUsersCitiesCreator = (role: "doctor" | "patient") => {
  return (dispatch: Dispatch<PatientsCitiesAction | DoctorsCitiesAction>) => {
    dispatch({
      type:
        role === "patient"
          ? GetPatientsCitiesTypes.GET_PATIENTS_CITIES_LOADING
          : GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_LOADING,
      loading: true,
    });

    API.get(`ar/users/admin/statistics/${role}/cities`, {})
      .then((res) => {
        dispatch({
          type:
            role === "patient"
              ? GetPatientsCitiesTypes.GET_PATIENTS_CITIES_SUCCESS
              : GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_SUCCESS,
          payload: res.data.response.results,
        });
      })
      .catch((error) => {
        dispatch({
          type:
            role === "patient"
              ? GetPatientsCitiesTypes.GET_PATIENTS_CITIES_ERROR
              : GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_ERROR,
          error: error.response.data,
        });
      });
  };
};
