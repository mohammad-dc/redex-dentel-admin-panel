import { IReservation } from "../../../interfaces/store/reservation.interface";
import { GetReservationsTypes } from "../types/reservations";

interface IGetReservationsLoadingAction {
  type: GetReservationsTypes.GET_RESERVATIONS_LOADING;
  loading: boolean;
}

interface IGetReservationsSuccessAction {
  type: GetReservationsTypes.GET_RESERVATIONS_SUCCESS;
  loading: boolean;
  payload: IReservation[];
}

interface IGetReservationsErrorAction {
  type: GetReservationsTypes.GET_RESERVATIONS_ERROR;
  loading: boolean;
  error: Error | null;
}

export type ReservationAction =
  | IGetReservationsLoadingAction
  | IGetReservationsSuccessAction
  | IGetReservationsErrorAction;
