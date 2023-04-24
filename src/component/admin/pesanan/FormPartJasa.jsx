import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Icon,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

export default function FormPartJasa({
  ItemName,
  EquityPrice,
  SellingPrice,
  Quantity,
  Date,
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

  const qtyStateHandler = () => {
    setQtyState(!qtyState);
  };

  return (
    <HStack mt={2}>
      <FormControl>
        <FormLabel>Nama Part/Jasa</FormLabel>
        <Input
          name="ItemName"
          type={"text"}
          value={ItemName}
          onChange={changeHandlerForm}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Harga Modal</FormLabel>
        <InputGroup>
          <InputLeftAddon children="Rp" />
          <Input
            name="EquityPrice"
            value={EquityPrice}
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
            name="SellingPrice"
            value={SellingPrice}
            type={"number"}
            onChange={changeHandlerForm}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <HStack>
          <FormLabel>Quantity</FormLabel>
          <Checkbox defaultChecked onChange={qtyStateHandler}>
            Berkuantitas?
          </Checkbox>
        </HStack>

        <HStack>
          <Input
            name="Quantity"
            borderColor={"gray.300"}
            type={"number"}
            value={Quantity}
            onChange={changeHandlerForm}
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
