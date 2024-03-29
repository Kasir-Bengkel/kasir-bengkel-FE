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
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ModalUpdateStock({
  id,
  namaStock,
  hargaModal,
  hargaJual,
  quantity,
  date,
  isOpen,
  onClose,
  onSaveHandler,
  onCloseHandler,
}) {
  const [updatedData, setUpdatedData] = useState({
    id,
    namaStock,
    hargaModal,
    hargaJual,
    date,
    quantity,
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const saveHandler = () => {
    onSaveHandler(updatedData);
    onCloseHandler();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Stock</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nama Stock</FormLabel>
            <Input
              name="namaStock"
              value={updatedData.namaStock}
              onChange={changeInputHandler}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Harga Modal</FormLabel>
            <InputGroup>
              <InputLeftAddon>{"Rp"}</InputLeftAddon>
              <Input
                type={"number"}
                name="hargaModal"
                value={updatedData.hargaModal}
                onChange={changeInputHandler}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Harga Jual</FormLabel>
            <InputGroup>
              <InputLeftAddon>{"Rp"}</InputLeftAddon>
              <Input
                type={"number"}
                name="hargaJual"
                value={updatedData.hargaJual}
                onChange={changeInputHandler}
              />
            </InputGroup>
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
