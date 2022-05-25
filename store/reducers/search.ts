import { ISearchInitialState } from "../../interfaces/store/search.interface";
import { ClearSearchAction, SearchAction } from "../actions/action/search";
import { SearchTypes } from "../actions/types/search";

const searchInitialState: ISearchInitialState = {
  search: null,
  day: null,
  month: null,
  year: null,
  status: null,
};

export const searchReducer = (
  state: ISearchInitialState = searchInitialState,
  action: SearchAction | ClearSearchAction
) => {
  switch (action.type) {
    case SearchTypes.ADD_SEARCH:
      return { ...state, search: action.payload };
    case SearchTypes.ADD_DAY:
      return { ...state, day: action.payload };
    case SearchTypes.ADD_MONTH:
      return { ...state, month: action.payload };
    case SearchTypes.ADD_YEAR:
      return { ...state, year: action.payload };
    case SearchTypes.ADD_STATUS:
      return { ...state, status: action.payload };
    case SearchTypes.CLEAR_ALL:
      return {
        ...state,
        search: null,
        day: null,
        month: null,
        year: null,
        status: null,
      };
    default:
      return state;
  }
};
