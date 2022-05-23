import { IDoctor } from "../../../interfaces/store/doctor.interface";
import { GetDoctorsTypes } from "../types/doctors";

interface IGetDoctorsLoadingAction {
  type: GetDoctorsTypes.GET_DOCTORS_LOADING;
  loading: boolean;
}

interface IGetDoctorsSuccessAction {
  type: GetDoctorsTypes.GET_DOCTORS_SUCCESS;
  loading: boolean;
  payload: IDoctor[];
}

interface IGetDoctorsErrorAction {
  type: GetDoctorsTypes.GET_DOCTORS_ERROR;
  loading: boolean;
  error: Error | null;
}

export type DoctorAction =
  | IGetDoctorsLoadingAction
  | IGetDoctorsSuccessAction
  | IGetDoctorsErrorAction;
