import { Select } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { RedexSelectPlaceholder } from "../enum";
//store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionSearchCreators } from "../store";
import { SearchTypes } from "../store/actions/types/search";

const RedexSelect: NextPage<{
  placeholder: string;
  options: Array<{ key: string; value: string | number }>;
}> = ({ placeholder, options }) => {
  const dispatch = useDispatch();
  const { addToSearchCreator } = bindActionCreators(
    actionSearchCreators,
    dispatch
  );

  return (
    <Select
      dir="ltr"
      placeholder={placeholder}
      onChange={(e) => {
        if (placeholder === RedexSelectPlaceholder.DAY)
          addToSearchCreator({
            type: SearchTypes.ADD_DAY,
            payload: e.target.value,
          });
        if (placeholder === RedexSelectPlaceholder.MONTH)
          addToSearchCreator({
            type: SearchTypes.ADD_MONTH,
            payload: e.target.value,
          });
        if (placeholder === RedexSelectPlaceholder.YEAR)
          addToSearchCreator({
            type: SearchTypes.ADD_YEAR,
            payload: e.target.value,
          });
        if (placeholder === RedexSelectPlaceholder.STATUS)
          addToSearchCreator({
            type: SearchTypes.ADD_STATUS,
            payload: e.target.value,
          });
      }}
    >
      {options.map((el) => (
        <option key={el.key} value={el.key}>
          {el.value}
        </option>
      ))}
    </Select>
  );
};

export default RedexSelect;
