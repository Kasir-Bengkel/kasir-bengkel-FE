import Sidebar from "@/component/admin/Sidebar";
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

export default function PengeluaranLainnya() {
  return (
    <Sidebar>
      <Heading>Part/Jasa</Heading>

      <Card mt={"12px"} px={4} py={8}>
        <HStack spacing={6}>
          <Input type={"date"} />
          <Input placeholder="Nominal" />
          <Input placeholder="Catatan" />
        </HStack>

        <TableContainer mt={"12px"}>
          <Table variant="striped" colorScheme={"blackAlpha"}>
            <Thead>
              <Tr>
                <Th w={"15%"}>Tanggal</Th>
                <Th w={"13%"}>No. Invoice</Th>
                <Th w={"30%"}>Nama Part/Jasa</Th>
                <Th>Modal</Th>
                <Th>Harga Jual</Th>
                <Th>Selisih Harga</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>11 Januari 2022</Td>
                <Td>00010323</Td>
                <Td>Shock Belakang</Td>
                <Td>
                  <Text color={"red"}>Rp. 15.000</Text>
                </Td>
                <Td>
                  <Text color={"green"}>Rp. 30.000</Text>
                </Td>
                <Td>
                  <Text color={"green"}>Rp. 5.000</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Sidebar>
  );
}
