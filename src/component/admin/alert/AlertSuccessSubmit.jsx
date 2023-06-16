import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import { useRef } from "react";

export default function AlertSuccessSubmit({
  isOpen,
  onClose,
  onCloseHandler,
  children,
}) {
  const cancelRef = useRef();

  const btnCloseHandler = () => {
    onCloseHandler(false);
    window.location.reload();
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Data Berhasil Tersimpan
          </AlertDialogHeader>

          <AlertDialogBody>{children}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              colorScheme="green"
              ref={cancelRef}
              onClick={btnCloseHandler}
            >
              Okay
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
