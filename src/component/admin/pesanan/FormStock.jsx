import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Icon,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";

export default function FormStock({
  stock,
  qty,
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
          name="stock"
          borderColor={"gray.300"}
          w={150}
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
        <HStack>
          <Input
            name="qty"
            onChange={changeHandlerForm}
            value={qty}
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
    </HStack>
  );
}
