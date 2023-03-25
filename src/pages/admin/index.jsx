import Sidebar from "../../component/admin/Sidebar";
import { useRouter } from "next/router";
import {
  Heading,
  Card,
  CardBody,
  Text,
  CardHeader,
  Flex,
  CardFooter,
  Button,
  SimpleGrid,
  Spacer,
  HStack,
  VStack,
  Box,
  IconButton,
  Avatar,
  Input,
  Stack,
  Center,
  useColorModeValue,
  Image,
  Divider,
  ButtonGroup,
  Wrap,
} from "@chakra-ui/react";

import { FiBell } from "react-icons/fi";

import { FcFeedIn, FcInTransit, FcExport, FcRules } from "react-icons/fc";

export default function AdminTest() {
  const router = useRouter();

  return (
    <Sidebar>
      <main>
        <Flex
          mb={"12px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          p={"1"}
        >
          <Heading size="md">Welcome back!</Heading>
          <HStack spacing={{ base: "0", md: "6" }}>
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
            <Flex alignItems={"center"}>
              <HStack>
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="md">Senyum Bagito</Text>
                  <Text fontSize="sm" color="gray.600">
                    Admin
                  </Text>
                </VStack>
              </HStack>
            </Flex>
          </HStack>
        </Flex>

        <Card>
          <CardHeader>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Heading>Tanggal</Heading>
              <Input size={"md"} w={"25%"} type={"date"} />
            </Flex>
            <Text mt={"8px"} fontSize={"2xl"}>
              17 Maret 2023
            </Text>
          </CardHeader>
          <CardBody>
            <HStack spacing={"64px"}>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"red.100"}
                p="6"
              >
                <Heading size="md">Total Order</Heading>
                <Text fontSize="3xl">10</Text>
              </Box>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"cyan.100"}
                p="6"
              >
                <Heading size="md">Total Pemasukan</Heading>
                <Text fontSize="3xl">Rp. 12.300.000</Text>
              </Box>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"teal.100"}
                p="6"
              >
                <Heading size="md">Total Modal</Heading>
                <Text fontSize="3xl">Rp. 600.000</Text>
              </Box>
            </HStack>
          </CardBody>
        </Card>

        <SimpleGrid mt={"12px"} columns={3} spacing={12}>
          <Card
            onClick={() => {
              router.push("/admin/history-pesanan");
            }}
          >
            <CardHeader>
              <FcFeedIn size={"24px"} />
            </CardHeader>
            <CardBody>
              <Heading size="md">Pesanan Masuk</Heading>
            </CardBody>
          </Card>
          <Card
            onClick={() => {
              router.push("/admin/stock-barang");
            }}
          >
            <CardHeader>
              <FcInTransit size={"24px"} />
            </CardHeader>
            <CardBody>
              <Heading size="md">Stock Barang</Heading>
            </CardBody>
          </Card>
          <Card
            onClick={() => {
              router.push("/admin/catatan-pengeluaran");
            }}
          >
            <CardHeader>
              <FcFeedIn size={"24px"} />
            </CardHeader>
            <CardBody>
              <Heading size="md">Catatan Pengeluaran</Heading>
            </CardBody>
          </Card>
          <Card
            onClick={() => {
              router.push("/admin/report");
            }}
          >
            <CardHeader>
              <FcRules size={"24px"} />
            </CardHeader>
            <CardBody>
              <Heading size="md">Report</Heading>
            </CardBody>
          </Card>
        </SimpleGrid>
      </main>
    </Sidebar>
  );
}
