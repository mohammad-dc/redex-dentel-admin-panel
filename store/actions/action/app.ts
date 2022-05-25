import {
  IUserCity,
  IUsersCounts,
  IUsersJoining,
} from "../../../interfaces/store/app.interface";
import {
  GetDoctorsCitiesTypes,
  GetPatientsCitiesTypes,
  GetReservationsCountsTypes,
  GetUsersCountsTypes,
  GetUsersJoiningTypes,
} from "../types/app";

//users counts
interface IGetUsersCountsLoadingAction {
  type: GetUsersCountsTypes.GET_USERS_COUNTS_LOADING;
  loading: boolean;
}

interface IGetUsersCountsSuccessAction {
  type: GetUsersCountsTypes.GET_USERS_COUNTS_SUCCESS;
  payload: IUsersCounts[];
}

interface IGetUsersCountsErrorAction {
  type: GetUsersCountsTypes.GET_USERS_COUNTS_ERROR;
  error: Error | null;
}

//users joining
interface IGetUsersJoiningLoadingAction {
  type: GetUsersJoiningTypes.GET_USERS_JOINING_LOADING;
  loading: boolean;
}

interface IGetUsersJoiningSuccessAction {
  type: GetUsersJoiningTypes.GET_USERS_JOINING_SUCCESS;
  payload: IUsersJoining[];
}

interface IGetUsersJoiningErrorAction {
  type: GetUsersJoiningTypes.GET_USERS_JOINING_ERROR;
  error: Error | null;
}

//reservations count
interface IGetReservationsCountsLoadingAction {
  type: GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_LOADING;
  loading: boolean;
}

interface IGetReservationsCountsSuccessAction {
  type: GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_SUCCESS;
  payload: number;
}

interface IGetReservationsCountsErrorAction {
  type: GetReservationsCountsTypes.GET_RESERVATIONS_COUNTS_ERROR;
  error: Error | null;
}

//patients cities count
interface IGetPatientsCitiesLoadingAction {
  type: GetPatientsCitiesTypes.GET_PATIENTS_CITIES_LOADING;
  loading: boolean;
}

interface IGetPatientsCitiesSuccessAction {
  type: GetPatientsCitiesTypes.GET_PATIENTS_CITIES_SUCCESS;
  payload: IUserCity[];
}

interface IGetPatientsCitiesErrorAction {
  type: GetPatientsCitiesTypes.GET_PATIENTS_CITIES_ERROR;
  error: Error | null;
}

//doctors cities count
interface IGetDoctorsCitiesLoadingAction {
  type: GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_LOADING;
  loading: boolean;
}

interface IGetDoctorsCitiesSuccessAction {
  type: GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_SUCCESS;
  payload: IUserCity[];
}

interface IGetDoctorsCitiesErrorAction {
  type: GetDoctorsCitiesTypes.GET_DOCTORS_CITIES_ERROR;
  error: Error | null;
}

export type UsersCountsAction =
  | IGetUsersCountsLoadingAction
  | IGetUsersCountsSuccessAction
  | IGetUsersCountsErrorAction;

export type UsersJoiningAction =
  | IGetUsersJoiningLoadingAction
  | IGetUsersJoiningSuccessAction
  | IGetUsersJoiningErrorAction;

export type ReservationsCountsAction =
  | IGetReservationsCountsLoadingAction
  | IGetReservationsCountsSuccessAction
  | IGetReservationsCountsErrorAction;

export type PatientsCitiesAction =
  | IGetPatientsCitiesLoadingAction
  | IGetPatientsCitiesSuccessAction
  | IGetPatientsCitiesErrorAction;

export type DoctorsCitiesAction =
  | IGetDoctorsCitiesLoadingAction
  | IGetDoctorsCitiesSuccessAction
  | IGetDoctorsCitiesErrorAction;
