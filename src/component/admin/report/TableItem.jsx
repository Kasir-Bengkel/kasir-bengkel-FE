import { Tr, Td } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";

export default function TableItem({ key, itemKey, salesOrder }) {
  return (
    <Tr id={key}>
      <Td>{salesOrder.invoiceNumber}</Td>
      <Td>{salesOrder.licensePlate}</Td>
      <ItemDetail
        key={itemKey}
        orderDetail={salesOrder.salesOrderDetails}
        discount={salesOrder.discount}
      />
    </Tr>
  );
}
