import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button,
  ModalContent,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ModalUpdatePengeluaran({
  id,
  date,
  nominal,
  catatan,
  onCloseHandler,
  onSaveHandler,
  isOpen,
  onClose,
}) {
  const [updatedData, setUpdatedData] = useState({
    id,
    date,
    nominal,
    catatan,
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const saveHandler = () => {
    onSaveHandler(updatedData);
    onCloseHandler();
  };

  const formattedDateUpdate = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toISOString().slice(0, 10);
    return formattedDate;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Pengeluaran Harian</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Tanggal</FormLabel>
            <Input
              type="date"
              name="date"
              value={formattedDateUpdate(updatedData.date)}
              onChange={changeInputHandler}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Nominal</FormLabel>
            <Input
              type="number"
              name="nominal"
              value={updatedData.nominal}
              onChange={changeInputHandler}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Catatan</FormLabel>
            <Input
              value={updatedData.catatan}
              onChange={changeInputHandler}
              name="catatan"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={saveHandler}>
            Save
          </Button>
          <Button onClick={onCloseHandler}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
