import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Box,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Input,
  Button,
  Card,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import CardStock from "@/component/admin/stock-barang/CardStock";
import stocksQuery from "../api/stocks-query";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import AlertSuccessSubmit from "@/component/admin/alert/AlertSuccessSubmit";
import AlertErrorSubmit from "@/component/admin/alert/AlertErrorSubmit";
import Loading from "@/component/Loading";

export default function StockBarang() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    isOpen: isOpenSubmitSuccess,
    onOpen: onOpenSubmitSuccess,
    onClose: onCloseSubmitSuccess,
  } = useDisclosure();
  const {
    isOpen: isOpenSubmitError,
    onOpen: onOpenSubmitError,
    onClose: onCloseSubmitError,
  } = useDisclosure();

  useEffect(() => {
    // console.log(user);
    if (user == null) router.push("/login");
  }, [user, router]);

  const [searchStockName, setSearchStockName] = useState("");
  const [stock, setStock] = useState();
  const [filteredItems, setFilteredItems] = useState();
  const [newStockItem, setNewStockItem] = useState({
    id: "",
    qty: "",
    nama_stock: "",
    harga_modal: "",
    harga_jual: "",
  });
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    if (
      newStockItem.qty === "" ||
      newStockItem.harga_modal === "" ||
      newStockItem.harga_jual === "" ||
      newStockItem.nama_stock === "" ||
      parseInt(newStockItem.harga_jual) < parseInt(newStockItem.harga_modal)
    ) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [newStockItem]);

  useEffect(() => {
    async function getStocksHandler() {
      setIsLoading(true);
      const stocksData = await stocksQuery({
        method: "GET",
      });
      if (stocksData.data !== undefined) {
        const { items } = stocksData.data;
        const filteredItems = items.filter((item) => item.types === "STOCK");
        setStock(filteredItems);
      }
      setIsLoading(false);
    }
    getStocksHandler();
  }, []);

  console.log(stock);

  useEffect(() => {
    if (stock !== undefined) {
      const newFilteredItems = stock.filter((stocks) =>
        stocks.stockName.toLowerCase().includes(searchStockName.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    }
  }, [stock, searchStockName]);

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setNewStockItem((prev) => ({ ...prev, [name]: value }));
  };

  const simpanHandler = async () => {
    const today = new Date();
    setIsLoading(true);
    const newStocksData = await stocksQuery({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        ItemName: newStockItem.nama_stock,
        EquityPrice: parseInt(newStockItem.harga_modal),
        SellingPrice: parseInt(newStockItem.harga_jual),
        Quantity: parseInt(newStockItem.qty),
        Date: today,
        Types: 1,
      },
    });
    setIsLoading(false);
    if (newStocksData.status === 200) {
      setNewStockItem({
        id: "",
        qty: "",
        nama_stock: "",
        harga_modal: "",
        harga_jual: "",
      });
      setSuccessMsg("Data berhasil tersimpan!");
      onOpenSubmitSuccess();
    } else {
      setErrorMsg("Data gagal tersimpan");
      onOpenSubmitError();
    }
  };

  const updateHandler = async (updatedData) => {
    setIsLoading(true);
    const updateStocksData = await stocksQuery({
      method: "PUT",
      params: updatedData.id,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        Id: updatedData.id,
        Quantity: updatedData.qty,
        ItemName: updatedData.namaStock,
        SellingPrice: updatedData.hargaJual,
        EquityPrice: updatedData.hargaModal,
        Date: updatedData.date,
        Types: 1,
      },
    });
    setIsLoading(false);
    if (updateStocksData.status === 204) {
      setSuccessMsg("Data berhasil diperbarui!");
      onOpenSubmitSuccess();
    } else {
      setErrorMsg("Data gagal diperbarui");
      onOpenSubmitError();
    }
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    const deleteStocksData = await stocksQuery({
      method: "DELETE",
      params: id,
    });
    setIsLoading(false);
    if (deleteStocksData.status === 204) {
      setSuccessMsg("Data berhasil terhapus!");
      onOpenSubmitSuccess();
    } else {
      setErrorMsg("Data gagal terhapus");
      onOpenSubmitError();
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <AlertSuccessSubmit
        isOpen={isOpenSubmitSuccess}
        onOpen={onOpenSubmitSuccess}
        onCloseHandler={onCloseSubmitSuccess}
      >
        {successMsg}
      </AlertSuccessSubmit>
      <AlertErrorSubmit
        isOpen={isOpenSubmitError}
        onOpen={onOpenSubmitError}
        onCloseHandler={onCloseSubmitError}
      >
        {errorMsg}
      </AlertErrorSubmit>
      <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
        <Box>
          <Heading>Stock Barang</Heading>
          <Card p={4} mt={"12px"}>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Cari</Tab>
                <Tab>Buat Stock</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Input
                    maxW={"400px"}
                    bg={"white"}
                    placeholder="nama stock"
                    onChange={(e) => setSearchStockName(e.target.value)}
                  />
                </TabPanel>
                <TabPanel>
                  <SimpleGrid columns={5} spacing={2}>
                    <Input
                      bg={"white"}
                      name={"nama_stock"}
                      value={newStockItem.nama_stock}
                      placeholder="nama stock"
                      onChange={changeInputHandler}
                    />
                    <Input
                      bg={"white"}
                      name={"harga_modal"}
                      value={newStockItem.harga_modal}
                      placeholder="harga modal"
                      type={"number"}
                      onChange={changeInputHandler}
                    />
                    <Input
                      bg={"white"}
                      name={"harga_jual"}
                      value={newStockItem.harga_jual}
                      placeholder="harga jual"
                      type={"number"}
                      onChange={changeInputHandler}
                    />
                    <Input
                      bg={"white"}
                      name={"qty"}
                      value={newStockItem.qty}
                      placeholder="jumlah stock"
                      type={"number"}
                      onChange={changeInputHandler}
                    />
                    <Button
                      onClick={simpanHandler}
                      colorScheme="green"
                      isDisabled={invalid}
                    >
                      Simpan
                    </Button>
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>

          {filteredItems !== undefined && (
            <VStack
              mt={"12px"}
              spacing={8}
              overflowY={"scroll"}
              alignItems={"unset"}
              maxH={"68vh"}
              pb={4}
            >
              {filteredItems.map((item) => (
                <CardStock
                  key={item.id}
                  id={item.id}
                  curQty={item.currentQuantity}
                  namaStock={item.stockName}
                  hargaModal={item.equityPrice}
                  hargaJual={item.sellingPrice}
                  date={item.date}
                  onUpdateHandler={updateHandler}
                  onDeleteHandler={deleteHandler}
                />
              ))}
            </VStack>
          )}
        </Box>
      </SidebarContainer>
    </>
  );
}
