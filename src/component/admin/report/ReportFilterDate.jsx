import { Card, HStack, Input, FormControl, FormLabel } from "@chakra-ui/react";
export default function ReportFilterDate({ onDateChange }) {
  function changeDateHandler(e) {
    onDateChange(e.target.value);
  }

  return (
    <Card w={"30%"} mt={2} px={4} py={8}>
      <HStack spacing={6}>
        <FormControl>
          <FormLabel>Tanggal</FormLabel>
          <Input type={"date"} onChange={changeDateHandler} />
        </FormControl>
        {/* <FormControl>
          <FormLabel>Sampai Tanggal</FormLabel>
          <Input type={"date"} />
        </FormControl> */}
      </HStack>
    </Card>
  );
}
