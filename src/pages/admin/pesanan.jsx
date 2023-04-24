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
import salesOrderQuery from "../api/salesorders-query";
import { formatMoney } from "@/helper/FormatMoney";

export default function Pesanan() {
  const today = new Date();
  const [fieldsStock, setFieldsStock] = useState([]);
  const [fieldsPartJasa, setFieldsPartJasa] = useState([]);
  const [sidebarWidth, setSidebarWidth] = useState(100);
  const [windowsWidth, setWindowsWidth] = useState();
  const { width } = useWindowSize();
  const [fieldSalesOrder, setFieldSalesOrder] = useState({
    NamaMekanik: "",
    PlatNomor: "",
    NamaKendaraan: "",
    TanggalInvoice: "",
    NoHp: "",
    NamaPelanggan: "",
    Date: today,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const addFieldStock = () => {
    setFieldsStock([
      ...fieldsStock,
      {
        ItemName: "",
        EquityPrice: 50000,
        SellingPrice: 100000,
        Quantity: "",
        Date: today,
      },
    ]);
  };

  const addFieldPartJasa = () => {
    setFieldsPartJasa([
      ...fieldsPartJasa,
      {
        ItemName: "",
        EquityPrice: 0,
        SellingPrice: 0,
        Quantity: "",
        Date: today,
      },
    ]);
  };

  const formSalesChangeHandler = (event) => {
    const { name, value } = event.target;
    setFieldSalesOrder((prev) => ({ ...prev, [name]: value }));
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

  const submitHandler = async () => {
    const joinedStocks = fieldsStock.concat(fieldsPartJasa);
    console.log(joinedStocks);
    let newTotalPrice = 0;
    joinedStocks.forEach((object) => {
      newTotalPrice +=
        parseInt(object.SellingPrice) - parseInt(object.EquityPrice);
    });
    setTotalPrice(newTotalPrice - totalDiscount);

    //   const newSalesOrder = await salesOrderQuery({
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: {
    //       LicensePlate: fieldSalesOrder.PlatNomor,
    //       VehicleName: fieldSalesOrder.NamaKendaraan,
    //       InvoiceDate: fieldSalesOrder.TanggalInvoice,
    //       PhoneNumber: fieldSalesOrder.NoHp,
    //       CustomerName: fieldSalesOrder.NamaPelanggan,
    //       MechanicsName: fieldSalesOrder.NamaMekanik,
    //       SalesOrderDetails: joinedStocks,
    //     },
    //   });
    //   if (newSalesOrder.status === 200) {
    //     window.location.reload();
    //   } else {
    //     console.log("data gagal masuk " + newSalesOrder);
    //     return;
    //   }
  };

  return (
    <SidebarContainer onSidebarWidth={sidebarWidthHandler}>
      <Card mt={2} p={4}>
        <FormControl>
          <FormLabel>Nama Mekanik</FormLabel>
          <Input
            borderColor={"gray.300"}
            type={"text"}
            placeholder={"John Doe"}
            name="NamaMekanik"
            value={fieldSalesOrder.NamaMekanik}
            onChange={formSalesChangeHandler}
          />
        </FormControl>
        <HStack my={4} spacing={8}>
          <FormControl>
            <FormLabel>Plat Nomor(tanpa spasi)</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"text"}
              placeholder={"B12AY"}
              name="PlatNomor"
              value={fieldSalesOrder.PlatNomor}
              onChange={formSalesChangeHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nama Kendaraan(Merk + Tipe + Tahun)</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"text"}
              placeholder={"Honda Civic 2016"}
              name="NamaKendaraan"
              value={fieldSalesOrder.NamaKendaraan}
              onChange={formSalesChangeHandler}
            />
          </FormControl>
        </HStack>
        <HStack spacing={8}>
          <FormControl>
            <FormLabel>Tanggal Invoice</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"date"}
              name="TanggalInvoice"
              value={fieldSalesOrder.TanggalInvoice}
              onChange={formSalesChangeHandler}
            />
          </FormControl>
          <FormControl>
            <FormLabel>No. Hp</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+62" />
              <Input
                borderColor={"gray.300"}
                type={"text"}
                name="NoHp"
                value={fieldSalesOrder.NoHp}
                onChange={formSalesChangeHandler}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Nama Pelanggan</FormLabel>
            <Input
              borderColor={"gray.300"}
              type={"text"}
              placeholder={"Ahmad Jabulani"}
              name="NamaPelanggan"
              value={fieldSalesOrder.NamaPelanggan}
              onChange={formSalesChangeHandler}
            />
          </FormControl>
        </HStack>
      </Card>
      <HStack mt={2}>
        <Card p={4} overflowY={"scroll"} w={"30%"} minH={"50vh"} maxH={"50vh"}>
          <Heading size={"sm"}>Pilih Stock</Heading>
          {fieldsStock.map((field, index) => (
            <FormStock
              key={index}
              ItemName={field.ItemName}
              EquityPrice={field.EquityPrice}
              SellingPrice={field.SellingPrice}
              Date={field.Date}
              Quantity={field.Quantity}
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
        <Card p={4} overflowY={"scroll"} w={"100%"} minH={"50vh"} maxH={"50vh"}>
          <Heading size={"sm"}>Pilih Part/Jasa</Heading>
          {fieldsPartJasa.map((field, index) => (
            <FormPartJasa
              key={index}
              ItemName={field.ItemName}
              EquityPrice={field.EquityPrice}
              SellingPrice={field.SellingPrice}
              Quantity={field.Quantity}
              Date={field.Date}
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
              <Text>{formatMoney(totalPrice)}</Text>
            </VStack>
            <HStack>
              <Select borderColor={"gray.300"} placeholder={"tipe pembayaran"}>
                <option value={"cash"}>Cash</option>
                <option value={"debit"}>Debit</option>
                <option value={"transfer"}>Transfer</option>
                <option value={"cashtrasnfer"}>Cash + Transfer</option>
              </Select>
              <InputGroup>
                <InputLeftAddon children="Rp" />
                <Input
                  type={"number"}
                  placeholder="diskon"
                  onChange={(e) => setTotalDiscount(e.target.value)}
                />
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
