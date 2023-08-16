import { Tr, Td, Text, List, ListItem } from "@chakra-ui/react";
import { formatMoney } from "@/helper/FormatMoney";
import { useEffect } from "react";

export default function ItemDetail({ orderDetail, onGrandTotal }) {
  useEffect(() => {
    const grandTotal = orderDetail.reduce((accumulator, currentValue) => {
      const { sellingPrice, equityPrice } = currentValue;
      const total = sellingPrice - equityPrice;
      return accumulator + total;
    }, 0);
    onGrandTotal(grandTotal);
  }, [orderDetail]);

  return (
    <>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem>{value.stockName}</ListItem>
          ))}
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem>
              <Text color={"green"}>
                {value.sellingPrice === 0
                  ? "-"
                  : formatMoney(value.sellingPrice)}
              </Text>
            </ListItem>
          ))}
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem>
              <Text color={"red"}>
                {value.equityPrice === 0
                  ? "-"
                  : formatMoney(value.sellingPrice)}
              </Text>
            </ListItem>
          ))}
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem>
              <Text color={"green"}>
                {formatMoney(value.sellingPrice - value.equityPrice)}
              </Text>
            </ListItem>
          ))}
        </List>
      </Td>
    </>
  );
}
