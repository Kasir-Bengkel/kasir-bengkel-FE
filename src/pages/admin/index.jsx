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
import { useRoleContext } from "@/context/RoleContext";
import { formatMoney } from "@/helper/FormatMoney";
import salesOrderDayProfitQuery from "../api/salesorderdayprofit-query";

export default function AdminTest() {
  const { user } = useAuthContext();
  const { role } = useRoleContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const [dateInput, setDateInput] = useState({ day: "", month: "", year: "" });
  const [dayProfit, setDayProfit] = useState(0);

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
    profitDayHandler(e.target.value);
  };

  const profitDayHandler = async (date) => {
    const salesOrderDayProfileData = await salesOrderDayProfitQuery({
      method: "GET",
      params: {
        date,
      },
    });
    setDayProfit(salesOrderDayProfileData.data.totalProfit);
  };

  useEffect(() => {
    const today = new Date();

    function convertDate(today) {
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    }
    profitDayHandler(convertDate(today));
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
                bg={"orange.100"}
                p="6"
              >
                <Heading size="md">Total Order</Heading>
                <Text fontSize="3xl">10</Text>
              </Box>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"green.100"}
                p="6"
              >
                <Heading size="md">Total Pemasukan</Heading>
                <Text fontSize="3xl">{formatMoney(dayProfit)}</Text>
              </Box>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"red.100"}
                p="6"
              >
                <Heading size="md">Total Pengeluaran</Heading>
                <Text fontSize="3xl">{formatMoney(12000)}</Text>
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
