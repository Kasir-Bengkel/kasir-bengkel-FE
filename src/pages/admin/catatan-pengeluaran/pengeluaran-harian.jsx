import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Heading,
  Card,
  HStack,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Button,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Flex,
  Text,
} from "@chakra-ui/react";

import TablePengeluaranHarian from "@/component/admin/pengeluaran-harian/TablePengeluaranHarian";
import { useState } from "react";
import { DUMMY_PENGELUARAN_HARIAN } from "@/constant/DummyData";
import { formatDate } from "@/helper/FormatDate";

export default function PengeluaranHarian() {
  const [pengeluaranHarian, setPengeluaranHarian] = useState(
    DUMMY_PENGELUARAN_HARIAN
  );
  const [searchDate, setSearchDate] = useState("");
  const [searchNominal, setSearchNominal] = useState("");
  const [searchCatatan, setSearchCatatan] = useState("");
  const [newPengeluaranHarian, setNewPengeluaranHarian] = useState({
    id: "",
    nominal: "",
    catatan: "",
    date: "",
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setNewPengeluaranHarian((prev) => ({ ...prev, [name]: value }));
  };

  const dateSearchHandler = (e) => {
    if (e.target.value !== "") {
      setSearchDate(formatDate(e.target.value));
    } else {
      setSearchDate("");
    }
  };

  const filteredItems = pengeluaranHarian.filter(
    (pengeluaran) =>
      pengeluaran.catatan.toLowerCase().includes(searchCatatan.toLowerCase()) &&
      pengeluaran.date.toLowerCase().includes(searchDate.toLowerCase()) &&
      pengeluaran.nominal.toString().includes(searchNominal.toLowerCase())
  );

  const submitHandler = () => {
    const newItem = {
      id: Math.random(),
      nominal: parseInt(newPengeluaranHarian.nominal),
      catatan: newPengeluaranHarian.catatan,
      date: formatDate(newPengeluaranHarian.date),
    };
    setPengeluaranHarian((prev) => [...prev, newItem]);
    setNewPengeluaranHarian({
      id: "",
      nominal: "",
      catatan: "",
      date: "",
    });
  };

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Pengeluaran Harian</Heading>

      <Card mt={"12px"} px={4} py={8}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Cari</Tab>
            <Tab>Pengeluaran Baru</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack spacing={6}>
                <Input type={"date"} onChange={dateSearchHandler} />
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
                  value={newPengeluaranHarian.date}
                  type={"date"}
                />
                <Input
                  name="nominal"
                  onChange={changeInputHandler}
                  type={"number"}
                  value={newPengeluaranHarian.nominal}
                  placeholder="Nominal"
                />
                <Input
                  name="catatan"
                  onChange={changeInputHandler}
                  value={newPengeluaranHarian.catatan}
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

      <VStack
        mt={"12px"}
        spacing={8}
        overflowY={"scroll"}
        alignItems={"unset"}
        maxH={"60vh"}
        pb={4}
      >
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
                  <TablePengeluaranHarian
                    key={item.id}
                    id={item.id}
                    nominal={item.nominal}
                    catatan={item.catatan}
                    date={item.date}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </VStack>
    </SidebarContainer>
  );
}
