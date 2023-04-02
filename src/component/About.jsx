import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import { FcDonate, FcFinePrint, FcPrint } from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Flex flexDirection={"column"} alignItems={"center"} mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text textAlign={"center"} mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default function About() {
  return (
    <>
      <Box p={4} id="about">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Fitur Kasir Bengkel
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
            Selamat datang di website perusahaan kami! Kami ingin memperkenalkan
            beberapa fitur yang tersedia di website kami yang dapat mempermudah
            aktivitas bisnis Anda.
          </Text>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"Print Invoice"}
              icon={<Icon as={FcPrint} w={10} h={10} />}
              description={
                "Anda tidak perlu lagi menghabiskan waktu berjam-jam untuk membuat invoice secara manual"
              }
              href={"#"}
            />
            <Card
              heading={"Tracking Pesanan"}
              icon={<Icon as={FcFinePrint} w={10} h={10} />}
              description={
                "Anda dapat melacak pesanan anda dengan mudah dan cepat."
              }
              href={"#"}
            />
            <Card
              heading={"Fitur Lainnya"}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                "Kami juga menyediakan fitur lain yang dapat membantu Anda dalam menjalankan bisnis Anda."
              }
              href={"#"}
            />
          </Flex>
        </Container>
      </Box>
      <Container maxW={"1200px"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={64}>
          <Stack spacing={4}>
            <Heading>Jasa Bengkel</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Kami juga menyediakan fitur lain yang dapat membantu Anda dalam
              menjalankan bisnis Anda.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Text fontWeight={600}>Gurah Mesin</Text>
              <Text fontWeight={600}>Tune Up</Text>
              <Text fontWeight={600}>Service Kaki Kaki</Text>
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1593699199342-59b40e08f0ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
