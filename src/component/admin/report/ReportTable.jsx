import { Card, Text, Flex } from "@chakra-ui/react";
import ReportTableChild from "./ReportTableChild";
import { useState, useEffect } from "react";

export default function ReportTable({ salesOrders }) {
  const [arrDate, setArrDate] = useState([]);

  useEffect(() => {
    if (salesOrders !== undefined) {
      const newArrDate = salesOrders.map((item) => item.invoiceDate);
      const sortArrDate = [...new Set(newArrDate)].sort();
      setArrDate(sortArrDate);
    }
  }, [salesOrders]);

  return (
    <Card mt={2} px={4} py={8}>
      <Flex
        bg={"gray.700"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={2}
        px={4}
        color={"white"}
      >
        <Text>Tanggal</Text>
        <Text>Total Order</Text>
      </Flex>
      {arrDate.map((value, index) => (
        <ReportTableChild key={index} date={value} salesOrders={salesOrders} />
      ))}
    </Card>
  );
}
