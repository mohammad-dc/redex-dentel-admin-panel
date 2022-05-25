import { SearchTypes } from "../types/search";

interface IAddSearchAction {
  type: SearchTypes.ADD_SEARCH;
  payload: string;
}

interface IAddDayAction {
  type: SearchTypes.ADD_DAY;
  payload: string;
}

interface IAddMonthAction {
  type: SearchTypes.ADD_MONTH;
  payload: string;
}

interface IAddYearAction {
  type: SearchTypes.ADD_YEAR;
  payload: string;
}

interface IAddStatusAction {
  type: SearchTypes.ADD_STATUS;
  payload: string;
}

interface IClearAllAction {
  type: SearchTypes.CLEAR_ALL;
}

export type ClearSearchAction = IClearAllAction;

export type SearchAction =
  | IAddSearchAction
  | IAddDayAction
  | IAddMonthAction
  | IAddYearAction
  | IAddStatusAction;
