import { Text, Flex, VisuallyHidden } from "@chakra-ui/react";
import { formatMoney } from "@/helper/FormatMoney";

export default function invoiceCardDetailItem({ detailItem }) {
  return (
    <>
      {detailItem.map((item) => (
        <Flex key={item.id} p={2} justifyContent={"space-between"} w={"100%"}>
          <Text>
            {item.name} || qty: {item.quantity}
          </Text>
          <Text>{formatMoney(item.sellingPrice * item.quantity)}</Text>
        </Flex>
      ))}
    </>
  );
}
