export interface IUsersCounts {
  _id: "doctor" | "patient";
  count: number;
}

export interface IUsersJoining {
  _id: number;
  count: number;
}

export interface IUserCity {
  _id: string;
  count: number;
}

export interface IUsersCountsInitialState {
  loading: boolean;
  results: IUsersCounts[];
  error: Error | null;
}

export interface IReservationsCountsInitialState {
  loading: boolean;
  result: number;
  error: Error | null;
}

export interface IUsersJoiningInitialState {
  loading: boolean;
  results: IUsersJoining[];
  error: Error | null;
}

export interface IUsersCitiesInitialState {
  loading: boolean;
  results: IUserCity[];
  error: Error | null;
}
