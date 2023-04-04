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
} from "@chakra-ui/react";

import { useState } from "react";
import { DUMMY_PENGELUARAN_LAINNYA } from "@/constant/DummyData";
import { formatDate } from "@/helper/FormatDate";
import TablePengeluaranLainnya from "@/component/admin/pengeluaran-lainnya/TablePengeluaranLainnya";

export default function PengeluaranLainnya() {
  const [pengeluaranLainnya, setPengeluaranLainnya] = useState(
    DUMMY_PENGELUARAN_LAINNYA
  );
  const [searchDate, setSearchDate] = useState("");
  const [searchNominal, setSearchNominal] = useState("");
  const [searchCatatan, setSearchCatatan] = useState("");
  const [newPengeluaranLainnya, setNewPengeluaranLainnya] = useState({
    id: "",
    nominal: "",
    catatan: "",
    date: "",
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setNewPengeluaranLainnya((prev) => ({ ...prev, [name]: value }));
  };

  const filteredItems = pengeluaranLainnya.filter(
    (pengeluaran) =>
      pengeluaran.catatan.toLowerCase().includes(searchCatatan.toLowerCase()) &&
      pengeluaran.date.toLowerCase().includes(searchDate.toLowerCase()) &&
      pengeluaran.nominal.toString().includes(searchNominal.toLowerCase())
  );

  const submitHandler = () => {
    const newItem = {
      id: Math.random(),
      nominal: parseInt(newPengeluaranLainnya.nominal),
      catatan: newPengeluaranLainnya.catatan,
      date: newPengeluaranLainnya.date,
    };
    setPengeluaranLainnya((prev) => [...prev, newItem]);
    setNewPengeluaranLainnya({
      id: "",
      nominal: "",
      catatan: "",
      date: "",
    });
  };

  const updateHandler = (updatedData) => {
    const updatedPengeluaran = pengeluaranLainnya.map((pengeluaran) => {
      if (pengeluaran.id === updatedData.id) {
        return {
          ...pengeluaran,
          date: updatedData.date,
          nominal: updatedData.nominal,
          catatan: updatedData.catatan,
        };
      }
      return pengeluaran;
    });

    setPengeluaranLainnya(updatedPengeluaran);
  };

  const deleteHandler = (id) => {
    const deletedPengeluaranLainnya = pengeluaranLainnya.filter(
      (item) => item.id !== id
    );
    setPengeluaranLainnya(deletedPengeluaranLainnya);
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
                >
                  Submit
                </Button>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>

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
                  catatan={item.catatan}
                  date={item.date}
                  onUpdateHandler={updateHandler}
                  onDeleteHandler={deleteHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </SidebarContainer>
  );
}
