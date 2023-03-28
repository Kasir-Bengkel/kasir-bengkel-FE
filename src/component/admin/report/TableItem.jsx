import { Tr, Td, Text, List, ListItem } from "@chakra-ui/react";

export default function TableItem() {
  return (
    <Tr>
      <Td>00010323</Td>
      <Td>B12AY</Td>
      <Td>
        <List spacing={4}>
          <ListItem>Spooring</ListItem>
          <ListItem>Spion</ListItem>
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          <ListItem>
            <Text color={"green"}>Rp. 30.000</Text>
          </ListItem>
          <ListItem>-</ListItem>
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          <ListItem>
            <Text color={"red"}>Rp. 15.000</Text>
          </ListItem>
          <ListItem>-</ListItem>
        </List>
      </Td>
      <Td>
        <List spacing={4}>
          <ListItem>
            <Text color={"green"}>Rp. 5.000</Text>
          </ListItem>
          <ListItem>-</ListItem>
        </List>
      </Td>
    </Tr>
  );
}
