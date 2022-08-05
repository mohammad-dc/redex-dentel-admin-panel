export interface IDoctor {
  _id: string;
  email: string;
  clinic_name: string;
  image_url: string;
  name: string;
  phone: string;
  city: string;
  address: string;
  reports: number;
  total_reservations_count: number;
  reservations_month_count: number;
  rate: number;
}

export interface IDoctorsInitialState {
  loading: boolean;
  results: IDoctor[];
  error: Error | null;
}

export interface IGetDoctorsRequestParams {
  search?: string;
  skip?: number;
}

export interface IDoctorRow {
  _id: string;
  image_url: string;
  name: string;
}
