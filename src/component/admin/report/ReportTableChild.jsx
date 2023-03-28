import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
  Flex,
} from "@chakra-ui/react";
import TableItem from "./TableItem";
export default function ReportTableChild() {
  return (
    <>
      <Flex
        py={2}
        px={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderY={"1px solid"}
        borderColor={"gray.300"}
      >
        <Text>1 Maret 2023</Text>
        <Text>2 Order</Text>
      </Flex>
      <TableContainer mt={"12px"}>
        <Table variant="simple" colorScheme={"blackAlpha"}>
          <Thead>
            <Tr>
              <Th w={"13%"}>No. Invoice</Th>
              <Th w={"30%"}>Plat Nomor</Th>
              <Th>Item Service</Th>
              <Th>Harga Jual</Th>
              <Th>Harga Modal</Th>
              <Th>Selisih Harga</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableItem />
          </Tbody>
        </Table>
      </TableContainer>
      <Flex
        bg={"gray.700"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={2}
        px={24}
        color={"white"}
      >
        <Text>Grand Total</Text>
        <Text>Rp. 15.000</Text>
      </Flex>
    </>
  );
}
