export interface IPatient {
  _id: string;
  image_url: string;
  name: string;
  phone: string;
  city: string;
  address: string;
  total_reservations_count: number;
  reservations_month_count: number;
}

export interface IPatientsInitialState {
  loading: boolean;
  results: IPatient[];
  error: Error | null;
}

export interface IGetPatientsRequestParams {
  search?: string;
  skip?: number;
}

export interface IPatientRow {
  _id: string;
  image_url: string;
  name: string;
}
