export interface ICity {
  _id: string;
  city_ar: string;
  city_en: string;
  active: boolean;
}

export interface ICitiesInitialState {
  loading: boolean;
  results: ICity[];
  error: Error | null;
}
