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
  FormErrorMessage,
  FormHelperText,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import FormStock from "@/component/admin/pesanan/FormStock";
import FormPartJasa from "@/component/admin/pesanan/FormPartJasa";
import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import salesOrderQuery from "../api/salesorders-query";
import stockQuery from "../api/stock-query";
import stocksBulkQuery from "../api/stocksbulk-query";
import { formatMoney } from "@/helper/FormatMoney";
import { FormatDateDB } from "@/helper/FormatDateDB";
import AlertSubmit from "@/component/admin/AlertSubmit";

export default function Pesanan() {
  const [fieldsStock, setFieldsStock] = useState([]);
  const [stockIdList, setStockIdList] = useState([]);
  const [fieldsPartJasa, setFieldsPartJasa] = useState([]);
  const [sidebarWidth, setSidebarWidth] = useState(100);
  const [windowsWidth, setWindowsWidth] = useState();
  const { width } = useWindowSize();
  const [fieldSalesOrder, setFieldSalesOrder] = useState({
    LicensePlate: "",
    VehicleName: "",
    InvoiceDate: "",
    PhoneNumber: "",
    CustomerName: "",
    MechanicsName: "",
    SalesOrderDetails: [],
  });
  const [salesOrderDetails, setSalesOrderDetails] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [invalidPrice, setInvalidPrice] = useState(true);
  const [invalidDetail, setInvalidDetail] = useState(true);
  const [error, isError] = useState(false);
  const [isSubmit, setIsSubmit] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const addFieldStock = () => {
    setFieldsStock([
      ...fieldsStock,
      {
        StockId: "",
        Quantity: 0,
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
        Quantity: 0,
        Types: 2,
        Date: FormatDateDB(fieldSalesOrder.InvoiceDate),
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
    const newArrayStockId = newFieldsStock
      .map((item) => {
        if (item.StockId !== "") {
          return item.StockId;
        } else {
          return undefined;
        }
      })
      .filter((item) => item !== undefined);
    setStockIdList(newArrayStockId);
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
    const newArrayStockId = newFormFieldsStock.map((item) => item.StockId);
    setStockIdList(newArrayStockId);
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

  useEffect(() => {
    if (fieldsPartJasa.length > 0) {
      const hasEmptyValuePartJasa = fieldsPartJasa.some((obj) =>
        Object.values(obj).some(
          (value) => value === "" || value === 0 || value === ""
        )
      );
      setInvalidPrice(hasEmptyValuePartJasa);
    }

    if (fieldsStock.length > 0) {
      const hasEmptyValueStock = fieldsStock.some((obj) =>
        Object.values(obj).some(
          (value) => value === "" || value === 0 || value === ""
        )
      );
      setInvalidPrice(hasEmptyValueStock);
    }
  }, [fieldsPartJasa, fieldsStock]);

  useEffect(() => {
    const hasEmptyValueDetail = Object.values(fieldSalesOrder).some(
      (value) => value === "" || value === 0 || value === ""
    );

    if (hasEmptyValueDetail === false && invalidPrice === false) {
      setInvalidDetail(false);
      return;
    }

    setInvalidDetail(true);
  }, [fieldSalesOrder, invalidPrice]);

  const checkPrizeHandler = async () => {
    let accPricePartJasa = 0;
    let accPriceStock = 0;
    if (fieldsPartJasa.length > 0) {
      accPricePartJasa = fieldsPartJasa.reduce((accumulator, currentValue) => {
        const { EquityPrice, SellingPrice, Quantity } = currentValue;
        const price =
          (parseInt(SellingPrice) - parseInt(EquityPrice)) * parseInt(Quantity);
        return accumulator + price;
      }, 0);
    }
    if (fieldsStock.length > 0) {
      let arrPriceStock = [];
      for (let i = 0; i < fieldsStock.length; i++) {
        const getStocksQty = await stockQuery({
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          params: fieldsStock[i].StockId,
        });
        arrPriceStock.push({
          EquityPrice: getStocksQty.data.equityPrice,
          SellingPrice: getStocksQty.data.sellingPrice,
          Quantity: fieldsStock[i].Quantity,
        });
      }
      accPriceStock = arrPriceStock.reduce((accumulator, currentValue) => {
        const { EquityPrice, SellingPrice, Quantity } = currentValue;
        const price =
          (parseInt(SellingPrice) - parseInt(EquityPrice)) * parseInt(Quantity);
        return accumulator + price;
      }, 0);
    }
    if (accPriceStock === 0) {
      setTotalPrice(accPricePartJasa);
    } else if (accPricePartJasa === 0) {
      setTotalPrice(accPriceStock);
    } else if (accPricePartJasa !== 0 && accPriceStock) {
      setTotalPrice(accPricePartJasa + accPriceStock);
    }
  };

  const submitHandler = async () => {
    onClose();

    let arrNewPartJasa = [];
    let arrNewStocks;
    let mergedStocksPartJasa;

    if (fieldsPartJasa.length > 0) {
      const newStocksBulk = await stocksBulkQuery({
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: fieldsPartJasa,
      });

      for (let i = 0; i < newStocksBulk.data.stocksId.length; i++) {
        const getStocksQty = await stockQuery({
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          params: newStocksBulk.data.stocksId[i].id,
        });

        arrNewPartJasa.push({
          Id: getStocksQty.data.id,
          Quantity: getStocksQty.data.quantity,
        });
      }
    }

    if (fieldsStock.length > 0) {
      const newArrayFieldsStock = fieldsStock.map(({ StockId, Quantity }) => {
        return { Id: StockId, Quantity };
      });
      arrNewStocks = newArrayFieldsStock;
    }

    if (arrNewPartJasa.length === 0) {
      mergedStocksPartJasa = arrNewStocks;
    } else if (arrNewStocks === undefined) {
      mergedStocksPartJasa = arrNewPartJasa;
    } else {
      mergedStocksPartJasa = arrNewPartJasa.concat(arrNewStocks);
    }

    const newSalesOrder = await salesOrderQuery({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: { fieldSalesOrder, mergedStocksPartJasa },
    });

    if (newSalesOrder.status === 200) {
      console.log(newSalesOrder);
    } else {
      console.log("data gagal masuk " + newSalesOrder);
      return;
    }
  };

  return (
    <SidebarContainer onSidebarWidth={sidebarWidthHandler}>
      <AlertSubmit
        isOpen={isOpen}
        onClose={onClose}
        onAcceptHandler={submitHandler}
        onCancelHandler={onClose}
      />
      <Flex gap={4}>
        <Card p={4} w={"30%"}>
          <VStack>
            <FormControl>
              <FormLabel>Nama Mekanik</FormLabel>
              <Input
                borderColor={"gray.300"}
                type={"text"}
                placeholder={"John Doe"}
                name="MechanicsName"
                value={fieldSalesOrder.MechanicsName}
                onChange={formSalesChangeHandler}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Plat Nomor(tanpa spasi)</FormLabel>
              <Input
                borderColor={"gray.300"}
                type={"text"}
                placeholder={"B12AY"}
                name="LicensePlate"
                value={fieldSalesOrder.LicensePlate}
                onChange={formSalesChangeHandler}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Nama Kendaraan(Merk + Tipe + Tahun)</FormLabel>
              <Input
                borderColor={"gray.300"}
                type={"text"}
                placeholder={"Honda Civic 2016"}
                name="VehicleName"
                value={fieldSalesOrder.VehicleName}
                onChange={formSalesChangeHandler}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tanggal Invoice</FormLabel>
              <Input
                borderColor={"gray.300"}
                type={"datetime-local"}
                name="InvoiceDate"
                value={fieldSalesOrder.InvoiceDate}
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
                  name="PhoneNumber"
                  value={fieldSalesOrder.PhoneNumber}
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
                name="CustomerName"
                value={fieldSalesOrder.CustomerName}
                onChange={formSalesChangeHandler}
              />
            </FormControl>
          </VStack>
        </Card>
        <VStack alignItems={"flex-start"} w={"100%"}>
          <Card
            w={"70%"}
            p={4}
            minH={"40vh"}
            maxH={"40vh"}
            overflowY={"scroll"}
          >
            <Heading size={"sm"}>Pilih Stock</Heading>
            {fieldsStock.map((field, index) => (
              <FormStock
                key={index}
                StockId={field.StockId}
                Quantity={field.Quantity}
                index={index}
                EquityPrice={field.EquityPrice}
                SellingPrice={field.SellingPrice}
                onRemoveForm={removeHandlerFormStock}
                onChangeForm={changeHandlerFormStock}
                listStockId={stockIdList}
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
          <Card
            p={4}
            overflowY={"scroll"}
            w={"100%"}
            minH={"40vh"}
            maxH={"40vh"}
          >
            <Heading size={"sm"}>Pilih Part/Jasa</Heading>
            {fieldsPartJasa.map((field, index) => (
              <FormPartJasa
                key={index}
                ItemName={field.ItemName}
                EquityPrice={field.EquityPrice}
                SellingPrice={field.SellingPrice}
                Quantity={field.Quantity}
                Date={field.Date}
                Types={field.Types}
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
        </VStack>
      </Flex>
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
              <Button
                px={8}
                colorScheme={"blue"}
                onClick={checkPrizeHandler}
                isDisabled={invalidPrice}
              >
                Cek Harga
              </Button>
              <Button
                px={8}
                colorScheme={"blue"}
                onClick={onOpen}
                isDisabled={invalidDetail}
              >
                Submit
              </Button>
            </HStack>
          </Flex>
        </Box>
      )}
    </SidebarContainer>
  );
}
