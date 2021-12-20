import {
  Modal as ChakraModal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function Modal({
  name,
  isOpen,
  onClose,
  children,
  handleSubmit,
  handleDelete,
}) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {name}
          {/* <Button ml={20}>추가</Button> */}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {handleDelete != null && (
            <Button variant="ghost" onClick={handleDelete}>
              Delete
            </Button>
          )}
          {handleSubmit != null && (
            <Button variant="ghost" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}
