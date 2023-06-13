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

export default function AlertSubmit({
  isOpen,
  onClose,
  onAcceptHandler,
  onCancelHandler,
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
            Submit Pesanan
          </AlertDialogHeader>

          <AlertDialogBody>
            Apakah informasi dan total harga sudah sesuai? anda tidak bisa
            mengulangi proses lagi.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onCancelHandler}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={onAcceptHandler} ml={3}>
              Submit
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
