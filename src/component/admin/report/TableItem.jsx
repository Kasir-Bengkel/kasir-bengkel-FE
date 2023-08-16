import { Tr, Td } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";

export default function TableItem({ itemKey, salesOrder, onGrandTotalItem }) {
  function grandTotalHandler(v) {
    onGrandTotalItem(v);
  }

  return (
    <Tr id={itemKey}>
      <Td>{salesOrder.invoiceNumber}</Td>
      <Td>{salesOrder.licensePlate}</Td>
      <ItemDetail
        orderDetail={salesOrder.salesOrderDetails}
        onGrandTotal={grandTotalHandler}
      />
    </Tr>
  );
}
