import { Alert, AlertIcon } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { IAlertProps } from "../interfaces/components.interface";

const RedexAlert: NextPage<IAlertProps> = ({ msg, status }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {msg}
    </Alert>
  );
};

export default RedexAlert;
