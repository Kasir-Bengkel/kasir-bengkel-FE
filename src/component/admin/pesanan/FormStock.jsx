import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Icon,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

export default function FormStock({
  ItemName,
  Quantity,
  EquityPrice,
  SellingPrice,
  Date,
  onChangeForm,
  index,
  onRemoveForm,
}) {
  const changeHandlerForm = (e) => {
    onChangeForm(index, e.target.name, e.target.value);
  };

  const removeForm = (i) => {
    onRemoveForm(i);
  };

  return (
    <HStack mt={2}>
      <FormControl>
        <FormLabel>Pilih Stock</FormLabel>
        <Select
          name="ItemName"
          borderColor={"gray.300"}
          w={150}
          value={ItemName}
          onChange={changeHandlerForm}
          placeholder={"pilih stock"}
        >
          <option value={"Spooring"}>Spooring| qty: 10</option>
          <option value={"Karet Setabil"}>Karet Setabil | qty: 12</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Quantity</FormLabel>
        <HStack>
          <Input
            name="Quantity"
            onChange={changeHandlerForm}
            value={Quantity}
            borderColor={"gray.300"}
            type={"number"}
          />
          <Icon
            as={FaMinusCircle}
            w={6}
            h={6}
            color={"red.500"}
            onClick={() => removeForm(index)}
          />
        </HStack>
      </FormControl>
      <VisuallyHidden></VisuallyHidden>
    </HStack>
  );
}
