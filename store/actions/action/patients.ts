import { IPatients } from "../../../interfaces/store/patients.interface";
import { GetPatientsTypes } from "../types/patients";

interface IGetPatientsLoadingAction {
  type: GetPatientsTypes.GET_PATIENTS_LOADING;
  loading: boolean;
}

interface IGetPatientsSuccessAction {
  type: GetPatientsTypes.GET_PATIENTS_SUCCESS;
  loading: boolean;
  payload: IPatients[];
}

interface IGetPatientsErrorAction {
  type: GetPatientsTypes.GET_PATIENTS_ERROR;
  loading: boolean;
  error: Error | null;
}

export type PatientAction =
  | IGetPatientsLoadingAction
  | IGetPatientsSuccessAction
  | IGetPatientsErrorAction;
