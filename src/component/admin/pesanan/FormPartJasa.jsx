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
  nama,
  qty,
  hModal,
  hJual,
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
          name="nama"
          type={"text"}
          value={nama}
          onChange={changeHandlerForm}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Harga Modal</FormLabel>
        <InputGroup>
          <InputLeftAddon children="Rp" />
          <Input name="hModal" value={hModal} onChange={changeHandlerForm} />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Harga Jual</FormLabel>
        <InputGroup>
          <InputLeftAddon children="Rp" />
          <Input name="hJual" value={hJual} onChange={changeHandlerForm} />
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
            name="qty"
            borderColor={"gray.300"}
            type={"number"}
            value={qty}
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
