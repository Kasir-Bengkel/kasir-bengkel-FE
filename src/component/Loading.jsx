import { Spinner, Box } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box
      position={"absolute"}
      zIndex={1000}
      width={"100%"}
      height={"100%"}
      backgroundColor={"blackAlpha.400"}
    >
      <Spinner
        position={"absolute"}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        top={"45%"}
        right={"45%"}
      />
    </Box>
  );
}
