import { Tr, Td, ButtonGroup, Button, Flex } from "@chakra-ui/react";
import { formatMoney } from "@/helper/FormatMoney";

export default function TablePengeluaranLainnya({ nominal, catatan, date }) {
  return (
    <Tr>
      <Td>{date}</Td>
      <Td>{formatMoney(nominal)}</Td>
      <Td>{catatan}</Td>
      <Td>
        <Flex justifyContent={"center"}>
          <ButtonGroup spacing={4}>
            <Button colorScheme={"blue"}>Update</Button>
            <Button colorScheme={"red"}>Delete</Button>
          </ButtonGroup>
        </Flex>
      </Td>
    </Tr>
  );
}
