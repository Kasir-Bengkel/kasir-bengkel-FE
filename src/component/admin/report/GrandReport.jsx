import {
  Heading,
  Card,
  HStack,
  Text,
  Flex,
  Center,
  VStack,
  Icon,
} from "@chakra-ui/react";

import { IoIosTrendingUp, IoIosTrendingDown, IoIosCash } from "react-icons/io";

export default function GrandReport() {
  return (
    <Flex mt={2} justifyContent={"space-between"}>
      <Card p={4} h={"120px"} justifyContent={"center"}>
        <HStack spacing={4}>
          <Center w={12} h={12} borderRadius={"full"} bg={"green.300"}>
            <Icon as={IoIosTrendingUp} color={"white"} w={6} h={6} />
          </Center>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Text color={"gray.500"}>Grand Total Pemasukan</Text>
            <Heading size={"sm"}>Rp. 250.000.000</Heading>
          </VStack>
        </HStack>
      </Card>
      <Card p={4} h={"120px"} justifyContent={"center"}>
        <HStack spacing={4}>
          <Center w={12} h={12} borderRadius={"full"} bg={"red.300"}>
            <Icon as={IoIosTrendingDown} color={"white"} w={6} h={6} />
          </Center>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Text color={"gray.500"}>Total Pengeluaran</Text>
            <HStack spacing={16}>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Heading size={"sm"} color={"gray.600"}>
                  Harian
                </Heading>
                <Heading size={"sm"}>Rp. 250.000.000</Heading>
              </VStack>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Heading size={"sm"} color={"gray.600"}>
                  Lainnya
                </Heading>
                <Heading size={"sm"}>Rp. 250.000.000</Heading>
              </VStack>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Heading size={"sm"} color={"gray.600"}>
                  Part/Jasa
                </Heading>
                <Heading size={"sm"}>Rp. 250.000.000</Heading>
              </VStack>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Heading size={"sm"} color={"gray.600"}>
                  Diskon
                </Heading>
                <Heading size={"sm"}>Rp. 250.000.000</Heading>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </Card>
      <Card p={4} h={"120px"} justifyContent={"center"}>
        <HStack spacing={4}>
          <Center w={12} h={12} borderRadius={"full"} bg={"blue.300"}>
            <Icon as={IoIosCash} color={"white"} w={6} h={6} />
          </Center>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Text color={"gray.500"}>Grand Total Profit</Text>
            <Heading size={"sm"}>Rp. 250.000.000</Heading>
          </VStack>
        </HStack>
      </Card>
    </Flex>
  );
}
