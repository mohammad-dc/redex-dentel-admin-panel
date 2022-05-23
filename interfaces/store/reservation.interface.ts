import { IDoctorRow } from "./doctor.interface";
import { IPatientRow } from "./patients.interface";

export interface IReservation {
  _id: string;
  status: string;
  doctor: IDoctorRow;
  patient: IPatientRow;
  date: Date;
  month: number;
  day: number;
  year: number;
}

export interface IGetReservationsRequestParams {
  search?: string;
  skip?: number;
  month?: number;
  day?: number;
  year?: number;
  status?: string;
}

export interface IReservationsInitialState {
  loading: boolean;
  results: IReservation[];
  error: Error | null;
}
