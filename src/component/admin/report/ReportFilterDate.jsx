import { Card, HStack, Input, FormControl, FormLabel } from "@chakra-ui/react";
export default function ReportFilterDate() {
  return (
    <Card mt={2} px={4} py={8}>
      <HStack spacing={6}>
        <FormControl>
          <FormLabel>Dari Tanggal</FormLabel>
          <Input type={"date"} />
        </FormControl>
        <FormControl>
          <FormLabel>Sampai Tanggal</FormLabel>
          <Input type={"date"} />
        </FormControl>
      </HStack>
    </Card>
  );
}
