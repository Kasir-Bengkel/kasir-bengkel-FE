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
import { formatDate } from "@/helper/FormatDate";
import { useState, useEffect } from "react";
import { formatMoney } from "@/helper/FormatMoney";
export default function ReportTableChild({ date, key, salesOrders }) {
  const [orderCount, setOrderCount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const filteredArr = salesOrders.filter(
      (order) => order.invoiceDate === date
    );
    setOrderCount(filteredArr.length);
  }, []);

  function onGrandTotalItemHandler(v) {
    setGrandTotal(v);
  }

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
        <Text>{formatDate(date)}</Text>
        <Text>{orderCount} Order</Text>
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
            {salesOrders
              .filter((order) => order.invoiceDate === date)
              .map((value, index) => (
                <TableItem
                  itemKey={index}
                  salesOrder={value}
                  onGrandTotalItem={onGrandTotalItemHandler}
                />
              ))}
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
        <Text>{formatMoney(grandTotal)}</Text>
      </Flex>
    </>
  );
}
