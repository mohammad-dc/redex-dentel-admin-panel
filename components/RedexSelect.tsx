import { Select } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const RedexSelect: NextPage<{
  placeholder: string;
  options: Array<{ key: string; value: string | number }>;
}> = ({ placeholder, options }) => {
  return (
    <Select dir="ltr" placeholder={placeholder}>
      {options.map((el) => (
        <option key={el.key} value={el.key}>
          {el.value}
        </option>
      ))}
    </Select>
  );
};

export default RedexSelect;
