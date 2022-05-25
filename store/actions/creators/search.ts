import { Dispatch } from "react";
import { ClearSearchAction, SearchAction } from "../action/search";
import { SearchTypes } from "../types/search";

export const addToSearchCreator = (type: SearchAction) => {
  return (dispatch: Dispatch<SearchAction>) => {
    dispatch(type);
  };
};

export const clearSearchCreator = () => {
  return (dispatch: Dispatch<ClearSearchAction>) => {
    dispatch({ type: SearchTypes.CLEAR_ALL });
  };
};
