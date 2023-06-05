import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Heading,
  Card,
  CardBody,
  Text,
  CardHeader,
  Flex,
  SimpleGrid,
  HStack,
  Box,
  Input,
} from "@chakra-ui/react";

import { monthNames } from "@/constant/MonthName";

import { FcFeedIn, FcInTransit, FcRules } from "react-icons/fc";
import { useAuthContext } from "@/context/AuthContext";

export default function AdminTest() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const [dateInput, setDateInput] = useState({ day: "", month: "", year: "" });

  const sidebarWidthHandler = (value) => {
    console.log(value);
  };

  const changeDateFormat = (date) => {
    const updatedValue = {
      day: date.getDate(),
      month: monthNames[date.getMonth()],
      year: date.getFullYear(),
    };
    setDateInput((oldValue) => ({
      ...oldValue,
      ...updatedValue,
    }));
  };

  const dateInputHandler = (e) => {
    const date = new Date(e.target.value);
    changeDateFormat(date);
  };

  useEffect(() => {
    const today = new Date();
    changeDateFormat(today);
  }, []);

  return (
    <SidebarContainer onSidebarWidth={sidebarWidthHandler}>
      <main>
        <Card>
          <CardHeader>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Heading>Tanggal</Heading>
              <Input
                size={"md"}
                w={"25%"}
                type={"date"}
                onChange={dateInputHandler}
              />
            </Flex>
            <Text mt={"8px"} fontSize={"2xl"}>
              {dateInput.day} {dateInput.month} {dateInput.year}
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
    </SidebarContainer>
  );
}
