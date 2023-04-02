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
  Td,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { DUMMY_PARTJASA } from "@/constant/DummyData";
import TablePartJasa from "@/component/admin/part-jasa/TablePartJasa";

export default function PartJasa() {
  const [partJasa, setPartJasa] = useState(DUMMY_PARTJASA);
  const [searchName, setSearchName] = useState("");

  const filteredItems = partJasa.filter((item) =>
    item.nama.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Part/Jasa</Heading>

      <Card mt={"12px"} px={4} py={8}>
        <HStack spacing={6}>
          <Input
            placeholder="Nama Part/Jasa"
            onChange={(e) => setSearchName(e.target.value)}
          />
        </HStack>

        <TableContainer mt={"12px"}>
          <Table variant="striped" colorScheme={"blackAlpha"}>
            <Thead>
              <Tr>
                <Th w={"13%"}>No. Invoice</Th>
                <Th w={"30%"}>Nama Part/Jasa</Th>
                <Th>Modal</Th>
                <Th>Harga Jual</Th>
                <Th>Selisih Harga</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredItems.map((item) => (
                <TablePartJasa
                  key={item.id}
                  id={item.id}
                  invoice={item.invoice}
                  jual={item.jual}
                  modal={item.modal}
                  nama={item.nama}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </SidebarContainer>
  );
}
