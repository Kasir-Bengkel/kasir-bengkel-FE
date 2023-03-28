import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Heading,
  HStack,
  Input,
  Select,
  VStack,
  Text,
  Flex,
  Box,
  Center,
  Badge,
} from "@chakra-ui/react";

import { FcDocument } from "react-icons/fc";

export default function HistoryPesanan() {
  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Box px={8}>
        <Heading>Pesanan Masuk</Heading>
        <HStack mt={"12px"}>
          <Input bg={"white"} placeholder="No Invoice" />
          <Input bg={"white"} placeholder="Plat Nomor" />
          <Input bg={"white"} placeholder="Tanggal" type="datetime-local" />
          <Select bg={"white"} placeholder="Status">
            <option value="option1">Lunas</option>
            <option value="option2">Pending</option>
            <option value="option3">Hutang</option>
          </Select>
        </HStack>

        <VStack mt={"12px"} spacing={8}>
          <Box w={"100%"} bg={"white"} borderRadius={"md"}>
            <Flex
              borderBottom={"1px"}
              borderColor={"gray.300"}
              alignItems={"center"}
              justifyContent={"space-between"}
              p={4}
            >
              <HStack spacing={2}>
                <Center
                  bg={"blue.400"}
                  borderRadius="full"
                  w={"48px"}
                  h={"48px"}
                >
                  <FcDocument size={"28px"} />
                </Center>
                <Flex flexDirection={"column"}>
                  <HStack>
                    <Heading size={"sm"}>No. Invoice</Heading>
                    <Badge colorScheme="green">Success</Badge>
                  </HStack>
                  <Text>00010323</Text>
                </Flex>
              </HStack>
            </Flex>
            <Box
              borderBottom={"1px"}
              borderColor={"gray.300"}
              bg={"blackAlpha.200"}
            >
              <Flex px={4} py={1} justifyContent={"space-between"}>
                <Text>Nama Kendaraan</Text>
                <Text>Honda Civic</Text>
              </Flex>
            </Box>
            <Box borderBottom={"1px"} borderColor={"gray.300"}>
              <Flex px={4} py={1} justifyContent={"space-between"}>
                <Text>Plat Nomor</Text>
                <Text>B6313VKC</Text>
              </Flex>
            </Box>
            <Box
              borderBottom={"1px"}
              borderColor={"gray.300"}
              bg={"blackAlpha.200"}
            >
              <Flex px={4} py={1} justifyContent={"space-between"}>
                <Text>Nama Pemilik</Text>
                <Text>Yura Yunani</Text>
              </Flex>
            </Box>
            <Box borderBottom={"1px"} borderColor={"gray.300"}>
              <Flex px={4} pt={1} pb={8} justifyContent={"space-between"}>
                <Text>Metode Pembayaran</Text>
                <Text>Cash</Text>
              </Flex>
            </Box>
            <Box bg={"red.500"}>
              <Flex px={4} py={2} justifyContent={"space-between"}>
                <Text color={"white"}>Total Modal</Text>
                <Text color={"white"}>Rp. 250.000</Text>
              </Flex>
            </Box>
            <Box bg={"green.500"}>
              <Flex px={4} py={2} justifyContent={"space-between"}>
                <Text color={"white"}>Total Pendapatan</Text>
                <Text color={"white"}>Rp. 1.250.000</Text>
              </Flex>
            </Box>
            <Box>
              <Flex px={4} py={2} justifyContent={"space-between"}>
                <Text>Waktu Order</Text>
                <Text>19 Maret 2023 12:43</Text>
              </Flex>
            </Box>
          </Box>
        </VStack>
      </Box>
    </SidebarContainer>
  );
}
