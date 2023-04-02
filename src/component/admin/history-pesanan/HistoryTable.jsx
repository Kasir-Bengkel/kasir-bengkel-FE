import {
  Heading,
  HStack,
  Text,
  Flex,
  Box,
  Center,
  Badge,
} from "@chakra-ui/react";

import { FcDocument } from "react-icons/fc";
import { useRouter } from "next/router";

export default function HistoryTable({
  invoice,
  waktuOrder,
  namaKendaraan,
  namaPemilik,
  metodePembayaran,
  totalModal,
  totalPendapatan,
  platNomor,
  statusInvoice,
}) {
  const router = useRouter();

  let badgeStatus;

  if (statusInvoice === "lunas") {
    badgeStatus = <Badge colorScheme="green">Lunas</Badge>;
  } else if (statusInvoice === "pending") {
    badgeStatus = <Badge colorScheme="red">Pending</Badge>;
  } else if (statusInvoice === "hutang") {
    badgeStatus = <Badge colorScheme="yellow">Hutang</Badge>;
  }

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
              {badgeStatus}
            </HStack>
            <Text
              onClick={() => {
                router.push("/admin/invoice");
              }}
            >
              {invoice}
            </Text>
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
          <Text color={"white"}>{totalModal}</Text>
        </Flex>
      </Box>
      <Box bg={"green.500"}>
        <Flex px={4} py={2} justifyContent={"space-between"}>
          <Text color={"white"}>Total Pendapatan</Text>
          <Text color={"white"}>{totalPendapatan}</Text>
        </Flex>
      </Box>
      <Box>
        <Flex px={4} py={2} justifyContent={"space-between"}>
          <Text>Waktu Order</Text>
          <Text>{waktuOrder}</Text>
        </Flex>
      </Box>
    </Box>
  );
}
