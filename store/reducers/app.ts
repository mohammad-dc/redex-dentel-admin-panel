import {
  IReservationsCountsInitialState,
  IUsersCitiesInitialState,
  IUsersCountsInitialState,
  IUsersJoiningInitialState,
} from "../../interfaces/store/app.interface";
import {
  DoctorsCitiesAction,
  PatientsCitiesAction,
  ReservationsCountsAction,
  UsersCountsAction,
  UsersJoiningAction,
} from "../actions/action/app";
import {
  GetDoctorsCitiesTypes,
  GetPatientsCitiesTypes,
  GetReservationsCountsTypes,
  GetUsersCountsTypes,
  GetUsersJoiningTypes,
} from "../actions/types/app";

const usersCountsInitialState: IUsersCountsInitialState = {
  loading: false,
  results: [],
  error: null,
};

const usersJoiningInitialState: IUsersJoiningInitialState = {
  loading: false,
  results: [],
  error: null,
};

const patientsCitiesInitialState: IUsersCitiesInitialState = {
  loading: false,
  results: [],
  error: null,
};

const doctorsCitiesInitialState: IUsersCitiesInitialState = {
  loading: false,
  results: [],
  error: null,
};

const reservationsCountInitialState: IReservationsCountsInitialState = {
  loading: false,
  result: 0,
  error: null,
};

export const usersCountsReducer = (
  state: IUsersCountsInitialState = usersCountsInitialState,
  action: UsersCountsAction
) => {
  switch (action.type) {
    case GetUsersCountsTypes.GET_USERS_COUNTS_LOADING:
      return { ...state, loading: true };
    case GetUsersCountsTypes.GET_USERS_COUNTS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetUsersCountsTypes.GET_USERS_COUNTS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const usersJoiningReducer = (
  state: IUsersJoiningInitialState = usersJoiningInitialState,
  action: UsersJoiningAction
) => {
  switch (action.type) {
    case GetUsersJoiningTypes.GET_USERS_JOINING_LOADING:
      return { ...state, loading: true };
    case GetUsersJoiningTypes.GET_USERS_JOINING_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetUsersJoiningTypes.GET_USERS_JOINING_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const patientsCitiesReducer = (
  state: IUsersCitiesInitialState = patientsCitiesInitialState,
  action: PatientsCitiesAction
) => {
  switch (action.type) {
    case GetPatientsCitiesTypes.GET_PATIENTS_CITIES_LOADING:
      return { ...state, loading: true };
    case GetPatientsCitiesTypes.GET_PATIENTS_CITIES_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetPatientsCitiesTypes.GET_PATIENTS_CITIES_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const doctorsCitiesReducer = (
  state: IUsersCitiesInitialState = doctorsCitiesInitialState,
  action: DoctorsCitiesAction
) => {
  switch (action.type) {
    case GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_LOADING:
      return { ...state, loading: true };
    case GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const reservationsCountsReducer = (
  state: IReservationsCountsInitialState = reservationsCountInitialState,
  action: ReservationsCountsAction
) => {
  switch (action.type) {
    case GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_LOADING:
      return { ...state, loading: true };
    case GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_SUCCESS:
      return { ...state, loading: false, result: action.payload, error: null };
    case GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
