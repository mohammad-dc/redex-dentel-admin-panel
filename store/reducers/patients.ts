import { IPatientsInitialState } from "../../interfaces/store/patients.interface";
import { PatientAction } from "../actions/action/patients";
import { GetPatientsTypes } from "../actions/types/patients";

const patientsInitialState: IPatientsInitialState = {
  loading: false,
  results: [],
  error: null,
};

export const patientsReducer = (
  state: IPatientsInitialState = patientsInitialState,
  action: PatientAction
) => {
  switch (action.type) {
    case GetPatientsTypes.GET_PATIENTS_LOADING:
      return { ...state, loading: true };
    case GetPatientsTypes.GET_PATIENTS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetPatientsTypes.GET_PATIENTS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
