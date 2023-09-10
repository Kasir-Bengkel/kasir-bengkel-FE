import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
} from "@chakra-ui/react";

import { useRef } from "react";

export default function AlertErrorSubmitStock({
  isOpen,
  onClose,
  onCloseHandler,
  errorMsg,
  children,
}) {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Error Message
          </AlertDialogHeader>

          <AlertDialogBody>
            {errorMsg.map((itemName, index) => (
              <Text key={index}>{itemName}</Text>
            ))}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              colorScheme="red"
              ref={cancelRef}
              onClick={() => onCloseHandler(false)}
            >
              Okay
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
