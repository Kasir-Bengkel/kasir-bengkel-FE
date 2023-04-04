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
} from "@chakra-ui/react";
import CardStock from "@/component/admin/stock-barang/CardStock";
import { useState } from "react";
import { DUMMY_STOCK } from "@/constant/DummyData";

export default function StockBarang() {
  const [searchStockName, setSearchStockName] = useState("");
  const [stock, setStock] = useState(DUMMY_STOCK);
  const [newStockItem, setNewStockItem] = useState({
    id: "",
    qty: "",
    nama_stock: "",
    harga_modal: "",
    harga_jual: "",
  });

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setNewStockItem((prev) => ({ ...prev, [name]: value }));
  };

  const filteredItems = stock.filter((stocks) =>
    stocks.nama_stock.toLowerCase().includes(searchStockName.toLowerCase())
  );

  const simpanHandler = () => {
    const newItem = {
      id: Math.random(),
      qty: parseInt(newStockItem.qty),
      nama_stock: newStockItem.nama_stock,
      harga_modal: parseInt(newStockItem.harga_modal),
      harga_jual: parseInt(newStockItem.harga_jual),
    };
    setStock((prev) => [...prev, newItem]);
    setNewStockItem({
      id: "",
      qty: "",
      nama_stock: "",
      harga_modal: "",
      harga_jual: "",
    });
  };

  const updateHandler = (updatedData) => {
    const updatedStock = stock.map((item) => {
      if (item.id === updatedData.id) {
        return {
          ...item,
          qty: updatedData.qty,
          nama_stock: updatedData.namaStock,
          harga_jual: updatedData.hargaJual,
          harga_modal: updatedData.hargaModal,
        };
      }
      return item;
    });
    setStock(updatedStock);
  };

  const deleteHandler = (id) => {
    const deletedStock = stock.filter((item) => item.id !== id);
    setStock(deletedStock);
  };

  return (
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
                    onChange={changeInputHandler}
                  />
                  <Input
                    bg={"white"}
                    name={"harga_jual"}
                    value={newStockItem.harga_jual}
                    placeholder="harga jual"
                    onChange={changeInputHandler}
                  />
                  <Input
                    bg={"white"}
                    name={"qty"}
                    value={newStockItem.qty}
                    placeholder="jumlah stock"
                    onChange={changeInputHandler}
                  />
                  <Button onClick={simpanHandler} colorScheme="green">
                    Simpan
                  </Button>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

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
              qty={item.qty}
              namaStock={item.nama_stock}
              hargaModal={item.harga_modal}
              hargaJual={item.harga_jual}
              onUpdateHandler={updateHandler}
              onDeleteHandler={deleteHandler}
            />
          ))}
        </VStack>
      </Box>
    </SidebarContainer>
  );
}
