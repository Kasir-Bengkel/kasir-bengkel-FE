import { Tr, Td, Text } from "@chakra-ui/react";
import { formatMoney } from "@/helper/FormatMoney";
import { formatDateTime } from "@/helper/FormatDateTime";

export default function TablePartJasa({ invoice, nama, modal, jual, date }) {
  return (
    <Tr>
      <Td>{invoice}</Td>
      <Td>{formatDateTime(date)}</Td>
      <Td>{nama}</Td>
      <Td>
        <Text color={"red"}>{formatMoney(modal)}</Text>
      </Td>
      <Td>
        <Text color={"green"}>{formatMoney(jual)}</Text>
      </Td>
      <Td>
        <Text color={"green"}>{formatMoney(jual - modal)}</Text>
      </Td>
    </Tr>
  );
}
