import { IDoctorsInitialState } from "../../interfaces/store/doctor.interface";
import { DoctorAction } from "../actions/action/doctor";
import { GetDoctorsTypes } from "../actions/types/doctors";

const doctorsInitialState: IDoctorsInitialState = {
  loading: false,
  results: [],
  error: null,
};

export const doctorsReducer = (
  state: IDoctorsInitialState = doctorsInitialState,
  action: DoctorAction
) => {
  switch (action.type) {
    case GetDoctorsTypes.GET_DOCTORS_LOADING:
      return { ...state, loading: true };
    case GetDoctorsTypes.GET_DOCTORS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetDoctorsTypes.GET_DOCTORS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
