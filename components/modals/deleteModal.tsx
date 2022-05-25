import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const DeleteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        onClick={onOpen}
        colorScheme="red"
        aria-label="delete"
        icon={<DeleteIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{"تأكيد الحذف"}</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>{"هل انت متأكد من انك تريد الحذف؟"}</ModalBody>

          <ModalFooter dir="ltr">
            <Button mr={3} variant="ghost" onClick={onClose}>
              {"اغلاق"}
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              {"تأكيد الحدف"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DeleteModal;
