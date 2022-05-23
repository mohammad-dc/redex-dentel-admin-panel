import { IReservationsInitialState } from "../../interfaces/store/reservation.interface";
import { ReservationAction } from "../actions/action/reservations";
import { GetReservationsTypes } from "../actions/types/reservations";

const reservationsInitialState: IReservationsInitialState = {
  loading: false,
  results: [],
  error: null,
};

export const reservationsReducer = (
  state: IReservationsInitialState = reservationsInitialState,
  action: ReservationAction
) => {
  switch (action.type) {
    case GetReservationsTypes.GET_RESERVATIONS_LOADING:
      return { ...state, loading: true };
    case GetReservationsTypes.GET_RESERVATIONS_SUCCESS:
      return { ...state, loading: false, results: action.payload, error: null };
    case GetReservationsTypes.GET_RESERVATIONS_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
