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
import { formatMoney } from "@/helper/FormatMoney";

export default function GrandReport({
  income,
  expenseDay,
  expenseOther,
  grandProfit,
}) {
  return (
    <>
      <Card py={8} px={4} justifyContent={"center"}>
        <HStack spacing={4}>
          <Center w={12} h={12} borderRadius={"full"} bg={"green.300"}>
            <Icon as={IoIosTrendingUp} color={"white"} w={6} h={6} />
          </Center>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Text color={"gray.500"}>Grand Total Pemasukan</Text>
            <Heading size={"sm"}>{formatMoney(income)}</Heading>
          </VStack>
        </HStack>
      </Card>
      <Card py={8} px={4} justifyContent={"center"}>
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
                <Heading size={"sm"}>{formatMoney(expenseDay)}</Heading>
              </VStack>
              <VStack alignItems={"flex-start"} spacing={0}>
                <Heading size={"sm"} color={"gray.600"}>
                  Lainnya
                </Heading>
                <Heading size={"sm"}>{formatMoney(expenseOther)}</Heading>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
      </Card>
      <Card py={8} px={4} justifyContent={"center"}>
        <HStack spacing={4}>
          <Center w={12} h={12} borderRadius={"full"} bg={"blue.300"}>
            <Icon as={IoIosCash} color={"white"} w={6} h={6} />
          </Center>
          <VStack alignItems={"flex-start"} spacing={0}>
            <Text color={"gray.500"}>Grand Total Profit</Text>
            <Heading size={"sm"}>{formatMoney(grandProfit)}</Heading>
          </VStack>
        </HStack>
      </Card>
    </>
  );
}
