import { useState } from "react";
import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Icon,
  Center,
  Flex,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";

export default function FormStock({
  nama,
  stock,
  qty,
  hJual,
  hModal,
  onChangeForm,
  index,
  onRemoveForm,
  onChangeSumber,
}) {
  const [isStock, setIsStock] = useState("stock");

  const selectHandler = (e) => {
    setIsStock(e.target.value);
    onChangeSumber(index, e.target.value);
  };

  const changeHandlerForm = (e) => {
    onChangeForm(index, e.target.name, e.target.value);
  };

  const removeForm = (i) => {
    onRemoveForm(i);
  };

  return (
    <HStack mt={2}>
      <FormControl>
        <FormLabel>Nama Item/Jasa</FormLabel>
        <Input
          onChange={changeHandlerForm}
          name="nama"
          borderColor={"gray.300"}
          type={"text"}
          value={nama}
        />
      </FormControl>
      {isStock !== "stock" ? (
        <>
          <FormControl>
            <FormLabel>Modal</FormLabel>
            <InputGroup>
              <InputLeftAddon children="Rp." />
              <Input
                name="hModal"
                value={hModal}
                onChange={changeHandlerForm}
                borderColor={"gray.300"}
                type={"number"}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Harga Jual</FormLabel>
            <InputGroup>
              <InputLeftAddon children="Rp." />
              <Input
                name="hJual"
                value={hJual}
                onChange={changeHandlerForm}
                borderColor={"gray.300"}
                type={"number"}
              />
            </InputGroup>
          </FormControl>
        </>
      ) : (
        <>
          <FormControl>
            <FormLabel>Pilih Stock</FormLabel>
            <Select
              name="stock"
              borderColor={"gray.300"}
              value={stock}
              onChange={changeHandlerForm}
              placeholder={"pilih stock"}
            >
              <option value={"spakbor"}>spakbor | qty: 1</option>
              <option value={"spion"}>spion | qty: 2</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <InputGroup>
              <Input
                name="qty"
                onChange={changeHandlerForm}
                value={qty}
                borderColor={"gray.300"}
                type={"number"}
              />
            </InputGroup>
          </FormControl>
        </>
      )}

      <FormControl>
        <FormLabel>Sumber</FormLabel>
        <HStack>
          <Select
            borderColor={"gray.300"}
            name="stock"
            onChange={selectHandler}
          >
            <option value={"stock"}>Stock</option>
            <option value={"lainnya"}>Lainnya</option>
          </Select>
          <Icon
            as={FaMinusCircle}
            w={6}
            h={6}
            color={"red.500"}
            onClick={() => removeForm(index)}
          />
        </HStack>
      </FormControl>
    </HStack>
  );
}
