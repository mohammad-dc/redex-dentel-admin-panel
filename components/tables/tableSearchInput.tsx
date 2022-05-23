import React from "react";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const TableSearchInput = () => {
  return (
    <div>
      <HStack>
        <InputGroup w={250} p={0}>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            pr={1}
            variant="filled"
            type="text"
            placeholder="بحث عن الاسم"
          />
        </InputGroup>
        <Button>بحث</Button>
      </HStack>
      <Spacer h={10} />
    </div>
  );
};

export default TableSearchInput;
