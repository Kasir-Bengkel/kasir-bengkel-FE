import {
  Heading,
  HStack,
  Text,
  Flex,
  Box,
  Center,
  Badge,
  Link,
} from "@chakra-ui/react";

import { FcDocument } from "react-icons/fc";
import { useRouter } from "next/router";
import { formatDateTime } from "@/helper/FormatDateTime";
import { useState, useEffect } from "react";
import { formatMoney } from "@/helper/FormatMoney";
import salesOrderQuery from "@/pages/api/salesorder-query";
import { useSalesOrderContext } from "@/context/SalesOrderContext";

export default function HistoryTable({
  id,
  invoice,
  waktuOrder,
  namaKendaraan,
  namaPemilik,
  metodePembayaran,
  salesOrderDetail,
  platNomor,
}) {
  const router = useRouter();

  // let badgeStatus;

  // if (statusInvoice === "lunas") {
  //   badgeStatus = <Badge colorScheme="green">Lunas</Badge>;
  // } else if (statusInvoice === "pending") {
  //   badgeStatus = <Badge colorScheme="red">Pending</Badge>;
  // } else if (statusInvoice === "hutang") {
  //   badgeStatus = <Badge colorScheme="yellow">Hutang</Badge>;
  // }

  const [equityTotal, setEquityTotal] = useState(0);
  const [sellingTotal, setSellingTotal] = useState(0);

  const { setSalesOrder } = useSalesOrderContext();

  useEffect(() => {
    const accEquity = salesOrderDetail.reduce((accumulator, currentValue) => {
      const { equityPrice, quantity } = currentValue;
      const equity = equityPrice * quantity;
      return accumulator + equity;
    }, 0);
    setEquityTotal(accEquity);

    const accSelling = salesOrderDetail.reduce((accumulator, currentValue) => {
      const { sellingPrice, quantity } = currentValue;
      const selling = sellingPrice * quantity;
      return accumulator + selling;
    }, 0);
    setSellingTotal(accSelling);
  }, [salesOrderDetail]);

  const invoiceDetailHandler = async () => {
    const salesOrderData = await salesOrderQuery({
      method: "GET",
      params: {
        id,
      },
    });
    setSalesOrder(salesOrderData.data);
    router.push("/admin/invoice", undefined, { shallow: true, as: "/invoice" });
  };

  return (
    <Box
      w={"100%"}
      bg={"white"}
      borderRadius={"md"}
      border={"1px solid"}
      borderColor={"gray.300"}
    >
      <Flex
        borderBottom={"1px"}
        borderColor={"gray.300"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={4}
      >
        <HStack spacing={2}>
          <Center bg={"blue.400"} borderRadius="full" w={"48px"} h={"48px"}>
            <FcDocument size={"28px"} />
          </Center>
          <Flex flexDirection={"column"}>
            <HStack>
              <Heading size={"sm"}>No. Invoice</Heading>
            </HStack>
            <Link color="blue.400" onClick={invoiceDetailHandler}>
              {invoice}
            </Link>
          </Flex>
        </HStack>
      </Flex>
      <Box borderBottom={"1px"} borderColor={"gray.300"} bg={"blackAlpha.200"}>
        <Flex px={4} py={1} justifyContent={"space-between"}>
          <Text>Nama Kendaraan</Text>
          <Text>{namaKendaraan}</Text>
        </Flex>
      </Box>
      <Box borderBottom={"1px"} borderColor={"gray.300"}>
        <Flex px={4} py={1} justifyContent={"space-between"}>
          <Text>Plat Nomor</Text>
          <Text>{platNomor}</Text>
        </Flex>
      </Box>
      <Box borderBottom={"1px"} borderColor={"gray.300"} bg={"blackAlpha.200"}>
        <Flex px={4} py={1} justifyContent={"space-between"}>
          <Text>Nama Pemilik</Text>
          <Text>{namaPemilik}</Text>
        </Flex>
      </Box>
      <Box borderBottom={"1px"} borderColor={"gray.300"}>
        <Flex px={4} pt={1} pb={8} justifyContent={"space-between"}>
          <Text>Metode Pembayaran</Text>
          <Text>{metodePembayaran}</Text>
        </Flex>
      </Box>
      <Box bg={"red.500"}>
        <Flex px={4} py={2} justifyContent={"space-between"}>
          <Text color={"white"}>Total Modal</Text>
          <Text color={"white"}>{formatMoney(equityTotal)}</Text>
        </Flex>
      </Box>
      <Box bg={"green.500"}>
        <Flex px={4} py={2} justifyContent={"space-between"}>
          <Text color={"white"}>Total Pendapatan</Text>
          <Text color={"white"}>{formatMoney(sellingTotal)}</Text>
        </Flex>
      </Box>
      <Box>
        <Flex px={4} py={2} justifyContent={"space-between"}>
          <Text>Waktu Order</Text>
          <Text>{formatDateTime(waktuOrder)}</Text>
        </Flex>
      </Box>
    </Box>
  );
}
