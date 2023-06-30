import React from "react";
import * as Chakra from "@chakra-ui/react";

interface ModalProps {
  children: React.ReactNode;
  header?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, header, isOpen, onClose }: ModalProps) => {
  return (
    <Chakra.Modal isOpen={isOpen} onClose={onClose} isCentered>
      <Chakra.ModalOverlay />
      <Chakra.ModalContent p="8">
        {!!header && <Chakra.ModalHeader>{header}</Chakra.ModalHeader>}
        <Chakra.ModalCloseButton color="purple.500" />
        <Chakra.ModalBody>{children}</Chakra.ModalBody>
      </Chakra.ModalContent>
    </Chakra.Modal>
  );
};
