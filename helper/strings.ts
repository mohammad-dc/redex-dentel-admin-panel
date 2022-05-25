import colors from "../common/colors";
import { ReservationStatus, ReservationStatusAR } from "../enum";
import { ReservationStatusTypes } from "../types";

export const getReservationsStatus = (status: ReservationStatusTypes) => {
  let obj = { color: colors.GRAY, text: ReservationStatusAR.PENDING };

  if (status === ReservationStatus.CANCELED)
    obj = { color: colors.RED, text: ReservationStatusAR.CANCELED };
  if (status === ReservationStatus.DECLINED)
    obj = { color: colors.RED, text: ReservationStatusAR.DECLINED };
  if (status === ReservationStatus.APPROVED)
    obj = { color: colors.GREEN, text: ReservationStatusAR.APPROVED };
  if (status === ReservationStatus.PENDING)
    obj = { color: colors.GRAY, text: ReservationStatusAR.PENDING };

  return obj;
};
