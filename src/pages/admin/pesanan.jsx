import Sidebar from "@/component/admin/Sidebar";
import { useState } from "react";
import {
  Heading,
  SimpleGrid,
  Card,
  Input,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  InputLeftAddon,
  Box,
  Select,
  Button,
  Center,
  Icon,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import FormStock from "@/component/admin/pesanan/FormStock";

export default function Pesanan() {
  const [fields, setFields] = useState([
    { nama: "", stock: "", qty: "", hModal: "", hJual: "" },
  ]);

  const addField = () => {
    setFields([
      ...fields,
      { nama: "", stock: "", qty: "", hModal: "", hJual: "" },
    ]);
  };

  const changeHandlerSumber = (i, value) => {
    const newFormFields = [...fields];
    if (value === "stock") {
      newFormFields[i]["hModal"] = "";
      newFormFields[i]["hJual"] = "";
    } else if (value === "lainnya") {
      newFormFields[i]["stock"] = "";
      newFormFields[i]["qty"] = "";
    }
    setFields(newFormFields);
  };

  const removeHandlerForm = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const submitHandler = () => {
    console.log(fields);
  };

  const changeHandlerForm = (i, name, value) => {
    const newFormFields = [...fields];
    newFormFields[i][name] = value;
    setFields(newFormFields);
  };

  return (
    <Sidebar>
      <Heading>Buat Pesanan</Heading>
      <Card mt={2} p={4}>
        <FormControl>
          <FormLabel>Nama Mekanik</FormLabel>
          <Input
            borderColor={"gray.300"}
            type={"text"}
            placeholder={"John Doe"}
          />
        </FormControl>
        <HStack my={4} spacing={8}>
          <FormControl>
            <FormLabel>Plat Nomor(tanpa spasi)</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"text"}
              placeholder={"B12AY"}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nama Kendaraan(Merk + Tipe + Tahun)</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"text"}
              placeholder={"Honda Civic 2016"}
            />
          </FormControl>
        </HStack>
        <HStack spacing={8}>
          <FormControl>
            <FormLabel>Tanggal Invoice</FormLabel>
            <Input borderColor={"gray.300"} type={"date"} />
          </FormControl>
          <FormControl>
            <FormLabel>No. Hp</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+62" />
              <Input borderColor={"gray.300"} type={"text"} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Nama Pelanggan</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"text"}
              placeholder={"Ahmad Jabulani"}
            />
          </FormControl>
        </HStack>
      </Card>
      <Card mt={2} p={4} overflowY={"scroll"} maxH={"40vh"}>
        <Heading size={"sm"}>Pilih Stock/Part/Jasa</Heading>
        {fields.map((field, index) => (
          <FormStock
            key={index}
            nama={field.nama}
            stock={field.stock}
            qty={field.qty}
            hModal={field.hModal}
            hJual={field.hJual}
            index={index}
            onRemoveForm={removeHandlerForm}
            onChangeForm={changeHandlerForm}
            onChangeSumber={changeHandlerSumber}
          />
        ))}
        <Center>
          <Button
            leftIcon={<Icon as={FaPlus} />}
            colorScheme="teal"
            mt={2}
            size={"md"}
            onClick={() => addField()}
          >
            Add Field
          </Button>
        </Center>
      </Card>
      <Box
        w={"100%"}
        h={"80px"}
        bg={"white"}
        position={"fixed"}
        bottom={0}
        left={237}
        borderTop={"1px"}
        borderColor={"gray.200"}
      >
        <button onClick={submitHandler}>Submit</button>
      </Box>
    </Sidebar>
  );
}
