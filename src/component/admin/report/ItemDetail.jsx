import { Td, Text, List, ListItem } from "@chakra-ui/react";
import { formatMoney } from "@/helper/FormatMoney";

export default function ItemDetail({ orderDetail, discount }) {
  return (
    <>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem key={index}>{value.stockName}</ListItem>
          ))}
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem key={index}>
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
            <ListItem key={index}>
              <Text color={"green"}>{value.quantity}</Text>
            </ListItem>
          ))}
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem key={index}>
              <Text color={"red"}>
                {value.equityPrice === 0 ? "-" : formatMoney(value.equityPrice)}
              </Text>
            </ListItem>
          ))}
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          <ListItem>
            <Text color={"red"}>{discount}</Text>
          </ListItem>
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          {orderDetail.map((value, index) => (
            <ListItem key={index}>
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
