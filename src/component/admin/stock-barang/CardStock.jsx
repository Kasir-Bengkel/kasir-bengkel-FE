import {
  Heading,
  Button,
  Card,
  VStack,
  HStack,
  ButtonGroup,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";

import { formatMoney } from "@/helper/FormatMoney";

export default function CardStock({
  id,
  qty,
  namaStock,
  hargaModal,
  hargaJual,
}) {
  return (
    <Card maxW={"100%"} mt={"12px"} p={4}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8}>
          <VStack>
            <Center bg={"teal.300"} w={"64px"} h={"64px"} borderRadius={"full"}>
              <Text fontSize={"2xl"} color={"white"}>
                {qty}
              </Text>
            </Center>
            <Text>Jumlah Stock</Text>
          </VStack>
          <VStack align={"flex-start"}>
            <Heading size={"sm"}>{namaStock}</Heading>
            <HStack>
              <Text>Harga Modal: </Text>
              <Text color={"red.400"}>{formatMoney(hargaModal)}</Text>
            </HStack>
            <HStack>
              <Text>Harga Jual: </Text>
              <Text color={"green.400"}>{formatMoney(hargaJual)}</Text>
            </HStack>
          </VStack>
        </HStack>
        <ButtonGroup spacing={8} size={"lg"}>
          <Button colorScheme={"blue"}>Update</Button>
          <Button colorScheme={"red"}>Hapus</Button>
        </ButtonGroup>
      </Flex>
    </Card>
  );
}
