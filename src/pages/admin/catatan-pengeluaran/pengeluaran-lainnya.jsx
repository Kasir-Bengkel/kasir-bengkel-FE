import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Heading,
  Card,
  HStack,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  VStack,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import TablePengeluaranLainnya from "@/component/admin/pengeluaran-lainnya/TablePengeluaranLainnya";
import expensesQuery from "@/pages/api/expenses-query";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";

export default function PengeluaranLainnya() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const [pengeluaranLainnya, setPengeluaranLainnya] = useState();
  const [filteredItems, setFilteredItems] = useState();
  const [searchDate, setSearchDate] = useState("");
  const [searchNominal, setSearchNominal] = useState("");
  const [searchCatatan, setSearchCatatan] = useState("");
  const [newPengeluaranLainnya, setNewPengeluaranLainnya] = useState({
    id: "",
    nominal: "",
    catatan: "",
    date: "",
  });
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    if (
      newPengeluaranLainnya.nominal === "" ||
      newPengeluaranLainnya.date === "" ||
      newPengeluaranLainnya.catatan === ""
    ) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [newPengeluaranLainnya]);

  useEffect(() => {
    async function getExpensesHandler() {
      const expensesData = await expensesQuery({
        method: "GET",
        params: {
          type: "other",
        },
      });
      if (expensesData.data !== undefined) {
        const { items } = expensesData.data;
        setPengeluaranLainnya(items);
      }
    }
    getExpensesHandler();
  }, []);

  useEffect(() => {
    if (pengeluaranLainnya !== undefined) {
      const newFilteredItems = pengeluaranLainnya.filter(
        (pengeluaran) =>
          pengeluaran.notes
            .toLowerCase()
            .includes(searchCatatan.toLowerCase()) &&
          pengeluaran.date.toLowerCase().includes(searchDate.toLowerCase()) &&
          pengeluaran.nominal.toString().includes(searchNominal.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    }
  }, [pengeluaranLainnya, searchCatatan, searchDate, searchNominal]);

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setNewPengeluaranLainnya((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async () => {
    const newExpensesData = await expensesQuery({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        Nominal: parseInt(newPengeluaranLainnya.nominal),
        Notes: newPengeluaranLainnya.catatan,
        Date: newPengeluaranLainnya.date,
        Types: 2,
      },
    });

    if (newExpensesData.status === 200) {
      setNewPengeluaranLainnya({
        id: "",
        qty: "",
        nama_stock: "",
        harga_modal: "",
        harga_jual: "",
      });

      window.location.reload();
    } else {
      console.log("data gagal masuk " + newExpensesData);
      return;
    }
  };

  const updateHandler = async (updatedData) => {
    const updateExpensesData = await expensesQuery({
      method: "PUT",
      params: {
        id: updatedData.id,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        Id: updatedData.id,
        Date: updatedData.date,
        Nominal: updatedData.nominal,
        Notes: updatedData.catatan,
        Types: 1,
      },
    });
    if (updateExpensesData.status === 204) {
      window.location.reload();
    } else {
      console.log("data gagal update " + updateExpensesData.messages);
      return;
    }
  };

  const deleteHandler = async (id) => {
    const deleteExpensesData = await expensesQuery({
      method: "DELETE",
      params: {
        id,
      },
    });
    if (deleteExpensesData.status === 204) {
      window.location.reload();
    } else {
      console.log("data gagal terhapus " + deleteExpensesData);
      return;
    }
  };

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Pengeluaran Lainnya</Heading>

      <Card mt={"12px"} px={4} py={8}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Cari</Tab>
            <Tab>Pengeluaran Baru</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack spacing={6}>
                <Input
                  type={"date"}
                  onChange={(e) => setSearchDate(e.target.value)}
                />
                <Input
                  onChange={(e) => setSearchNominal(e.target.value)}
                  placeholder="Nominal"
                  type={"number"}
                />
                <Input
                  onChange={(e) => setSearchCatatan(e.target.value)}
                  placeholder="Catatan"
                />
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack spacing={6}>
                <Input
                  name="date"
                  onChange={changeInputHandler}
                  value={newPengeluaranLainnya.date}
                  type={"date"}
                />
                <Input
                  name="nominal"
                  onChange={changeInputHandler}
                  type={"number"}
                  value={newPengeluaranLainnya.nominal}
                  placeholder="Nominal"
                />
                <Input
                  name="catatan"
                  onChange={changeInputHandler}
                  value={newPengeluaranLainnya.catatan}
                  placeholder="Catatan"
                />
                <Button
                  w={"220px"}
                  colorScheme={"blue"}
                  onClick={submitHandler}
                  isDisabled={invalid}
                >
                  Submit
                </Button>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>

      <VStack
        mt={"12px"}
        spacing={8}
        overflowY={"scroll"}
        alignItems={"unset"}
        maxH={"60vh"}
        pb={4}
      >
        {filteredItems !== undefined && (
          <Card mt={"12px"} px={4} py={8}>
            <TableContainer mt={"12px"}>
              <Table variant="striped" colorScheme={"blackAlpha"}>
                <Thead>
                  <Tr>
                    <Th>Tanggal</Th>
                    <Th>Nominal</Th>
                    <Th>Catatan</Th>
                    <Th>
                      <Flex justifyContent={"center"}>
                        <Text>Action</Text>
                      </Flex>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredItems.map((item) => (
                    <TablePengeluaranLainnya
                      key={item.id}
                      id={item.id}
                      nominal={item.nominal}
                      catatan={item.notes}
                      date={item.date}
                      onUpdateHandler={updateHandler}
                      onDeleteHandler={deleteHandler}
                    />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        )}
      </VStack>
    </SidebarContainer>
  );
}
