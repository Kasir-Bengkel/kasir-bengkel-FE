import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Icon,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";
import { useState, useRef } from "react";

export default function FormPartJasa({
  itemName,
  equityPrice,
  sellingPrice,
  quantity,
  types,
  date,
  onRemoveForm,
  onChangeForm,
  index,
}) {
  const changeHandlerForm = (e) => {
    onChangeForm(index, e.target.name, e.target.value);
  };
  const removeForm = () => {
    onRemoveForm(index);
  };

  const [qtyState, setQtyState] = useState(true);

  const qtyStateHandler = (e) => {
    setQtyState(!qtyState);
    onChangeForm(index, "types", qtyState ? 3 : 2);
    if (qtyState) {
      onChangeForm(index, "quantity", 0);
    }
  };

  return (
    <HStack mt={2}>
      <FormControl>
        <FormLabel>Nama Part/Jasa</FormLabel>
        <Input
          name="itemName"
          type={"text"}
          value={itemName}
          onChange={changeHandlerForm}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Harga Modal</FormLabel>
        <InputGroup>
          <InputLeftAddon children="Rp" />
          <Input
            name="equityPrice"
            value={equityPrice}
            type={"number"}
            onChange={changeHandlerForm}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Harga Jual</FormLabel>
        <InputGroup>
          <InputLeftAddon children="Rp" />
          <Input
            name="sellingPrice"
            value={sellingPrice}
            type={"number"}
            onChange={changeHandlerForm}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <HStack>
          <FormLabel>Quantity</FormLabel>
          <Checkbox
            defaultChecked
            name="types"
            value={types}
            onChange={qtyStateHandler}
          >
            Berkuantitas?
          </Checkbox>
        </HStack>

        <HStack>
          <Input
            name="quantity"
            borderColor={"gray.300"}
            type={"number"}
            value={quantity}
            onChange={(e) => {
              onChangeForm(index, e.target.name, parseInt(e.target.value));
            }}
            disabled={qtyState ? false : true}
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
