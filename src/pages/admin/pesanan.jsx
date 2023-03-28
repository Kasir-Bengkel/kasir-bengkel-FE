import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import {
  Heading,
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
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import FormStock from "@/component/admin/pesanan/FormStock";
import FormPartJasa from "@/component/admin/pesanan/FormPartJasa";
import SidebarContainer from "@/component/admin/navigation/SidebarContainer";

export default function Pesanan() {
  const [fieldsStock, setFieldsStock] = useState([]);
  const [fieldsPartJasa, setFieldsPartJasa] = useState([]);
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const [windowsWidth, setWindowsWidth] = useState();
  const { width } = useWindowSize();

  const addFieldStock = () => {
    setFieldsStock([...fieldsStock, { stock: "", qty: "" }]);
  };

  const addFieldPartJasa = () => {
    setFieldsPartJasa([
      ...fieldsPartJasa,
      { nama: "", hModal: "", hJual: "", qty: "" },
    ]);
  };

  const removeHandlerFormStock = (index) => {
    const newFieldsStock = [...fieldsStock];
    newFieldsStock.splice(index, 1);
    setFieldsStock(newFieldsStock);
  };

  const removeHandlerFormPartJasa = (index) => {
    const newFieldsPartJasa = [...fieldsPartJasa];
    newFieldsPartJasa.splice(index, 1);
    setFieldsPartJasa(newFieldsPartJasa);
  };

  const submitHandler = () => {
    console.log(fieldsStock);
    console.log(fieldsPartJasa);
  };

  const changeHandlerFormStock = (i, name, value) => {
    const newFormFieldsStock = [...fieldsStock];
    newFormFieldsStock[i][name] = value;
    setFieldsStock(newFormFieldsStock);
  };

  const changeHandlerFormPartJasa = (i, name, value) => {
    const newFormFieldsPartJasa = [...fieldsPartJasa];
    newFormFieldsPartJasa[i][name] = value;
    setFieldsPartJasa(newFormFieldsPartJasa);
  };

  const sidebarWidthHandler = (value) => {
    setSidebarWidth(value);
  };

  useEffect(() => {
    setWindowsWidth(width);
  }, []);

  return (
    <SidebarContainer onSidebarWidth={sidebarWidthHandler}>
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
      <HStack mt={2}>
        <Card p={4} overflowY={"scroll"} w={"30%"}>
          <Heading size={"sm"}>Pilih Stock</Heading>
          {fieldsStock.map((field, index) => (
            <FormStock
              key={index}
              stock={field.stock}
              qty={field.qty}
              index={index}
              onRemoveForm={removeHandlerFormStock}
              onChangeForm={changeHandlerFormStock}
            />
          ))}
          <Center>
            <Button
              leftIcon={<Icon as={FaPlus} />}
              colorScheme="teal"
              mt={2}
              size={"md"}
              onClick={addFieldStock}
            >
              Add Field
            </Button>
          </Center>
        </Card>
        <Card p={4} overflowY={"scroll"} w={"100%"}>
          <Heading size={"sm"}>Pilih Part/Jasa</Heading>
          {fieldsPartJasa.map((field, index) => (
            <FormPartJasa
              key={index}
              nama={field.nama}
              hModal={field.hModal}
              hJual={field.hJual}
              qty={field.qty}
              index={index}
              onRemoveForm={removeHandlerFormPartJasa}
              onChangeForm={changeHandlerFormPartJasa}
            />
          ))}

          <Center>
            <Button
              leftIcon={<Icon as={FaPlus} />}
              colorScheme="teal"
              mt={2}
              size={"md"}
              onClick={addFieldPartJasa}
            >
              Add Field
            </Button>
          </Center>
        </Card>
      </HStack>
      {windowsWidth !== undefined && (
        <Box
          w={windowsWidth - sidebarWidth}
          h={"80px"}
          bg={"white"}
          position={"fixed"}
          bottom={0}
          right={0}
          borderTop={"1px"}
          borderColor={"gray.200"}
          py={2}
          px={8}
        >
          <Flex justifyContent={"space-between"}>
            <VStack alignItems={"flex-start"}>
              <Heading size={"sm"}>Total Pembayaran: </Heading>
              <Text>Rp. 150.000</Text>
            </VStack>
            <HStack>
              <Select borderColor={"gray.300"} placeholder={"tipe pembayaran"}>
                <option value={"cash"}>Cash</option>
                <option value={"debit"}>Debit</option>
              </Select>
              <InputGroup>
                <InputLeftAddon children="Rp" />
                <Input type={"number"} placeholder="diskon" />
              </InputGroup>
              <Button px={8} colorScheme={"blue"} onClick={submitHandler}>
                Submit
              </Button>
            </HStack>
          </Flex>
        </Box>
      )}
    </SidebarContainer>
  );
}
