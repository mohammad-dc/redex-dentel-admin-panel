import { IDoctorRow } from "./doctor.interface";
import { IPatientRow } from "./patients.interface";

export interface IReport {
  _id: string;
  reason_ar: string;
  reason_en: string;
  content: string;
  patient: IPatientRow;
  doctor: IDoctorRow;
  createdAt: Date;
}

export interface IGetReportsRequestParams {
  search?: string;
  skip?: number;
  reason?: string;
  type: string;
}

export interface IReportsInitialState {
  loading: boolean;
  results: IReport[];
  error: Error | null;
}
