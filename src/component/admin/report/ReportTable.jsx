import { Card, Text, Flex } from "@chakra-ui/react";
import ReportTableChild from "./ReportTableChild";

export default function ReportTable() {
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
      <ReportTableChild />
    </Card>
  );
}
