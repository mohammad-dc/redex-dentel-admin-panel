import { IDoctorRow } from "./doctor.interface";
import { IPatientRow } from "./patients.interface";

export interface IReport {
  _id: string;
  reason: string;
  content: string;
  patient: IPatientRow;
  doctor: IDoctorRow;
  day: number;
  month: number;
  year: number;
}

export interface IReportsReasons {
  _id: string;
  reason_ar: string;
  reason_en: string;
  reports_count: number;
}

export interface IGetReportsRequestParams {
  search?: string;
  skip?: number;
  reason?: string;
  type: string;
}

export interface IGetReportsReasonsRequestParams {
  skip?: number;
}

export interface IReportsInitialState {
  loading: boolean;
  results: IReport[];
  error: Error | null;
}

export interface IReportsReasonsInitialState {
  loading: boolean;
  results: IReportsReasons[];
  error: Error | null;
}
