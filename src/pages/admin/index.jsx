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

import { FcFeedIn, FcInTransit, FcRules, FcExport } from "react-icons/fc";
import { useAuthContext } from "@/context/AuthContext";
import { useRoleContext } from "@/context/RoleContext";
import { formatMoney } from "@/helper/FormatMoney";
import { FormatDateAPI } from "@/helper/FormatDateAPI";
import { formatDate } from "@/helper/FormatDate";
import incomeDayQuery from "../api/incomeday-query";
import countOrderQuery from "../api/countorder-query";
import totalExpenseDailyDayQuery from "../api/totalexpensedailyday-query";
import totalExpenseOtherDayQuery from "../api/totalexpenseotherday-query";

export default function AdminTest() {
  const { user } = useAuthContext();
  const { role } = useRoleContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const [dateInput, setDateInput] = useState("");
  const [dayIncome, setDayIncome] = useState(0);
  const [dayCount, setDayCount] = useState(0);
  const [dayExpense, setDayExpense] = useState(0);

  const sidebarWidthHandler = (value) => {
    console.log(value);
  };

  const dateInputHandler = (e) => {
    console.log("masuk");
    console.log(e.target.value);
    orderDayHandler(FormatDateAPI(e.target.value));
    incomeDayHandler(FormatDateAPI(e.target.value));
    expenseDayHandler(FormatDateAPI(e.target.value));
    setDateInput(formatDate(e.target.value));
  };

  const expenseDayHandler = async (date) => {
    const totalExpenseDailyDay = await totalExpenseDailyDayQuery({
      method: "GET",
      params: {
        date,
      },
    });
    if (totalExpenseDailyDay.status !== 200) {
      return;
    }
    const totalExpenseOtherDay = await totalExpenseOtherDayQuery({
      method: "GET",
      params: {
        date,
      },
    });
    if (totalExpenseOtherDay.status !== 200) {
      return;
    }
    const totalExpenseDay =
      totalExpenseDailyDay.data.total + totalExpenseOtherDay.data.price;

    setDayExpense(totalExpenseDay);
  };

  const orderDayHandler = async (date) => {
    const countOrderData = await countOrderQuery({
      method: "GET",
      params: {
        date,
      },
    });
    if (countOrderData.status === 200) {
      setDayCount(countOrderData.data.count);
    }
  };

  const incomeDayHandler = async (date) => {
    const incomeDayData = await incomeDayQuery({
      method: "GET",
      params: {
        date,
      },
    });
    if (incomeDayData.status === 200) {
      setDayIncome(incomeDayData.data.totalIncome);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDateInput(formatDate(today));
    orderDayHandler(FormatDateAPI(today));
    incomeDayHandler(FormatDateAPI(today));
    expenseDayHandler(FormatDateAPI(today));
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
              {dateInput}
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
                <Text fontSize="3xl">{dayCount}</Text>
              </Box>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"green.100"}
                p="6"
              >
                <Heading size="md">Total Pemasukan</Heading>
                <Text fontSize="3xl">{formatMoney(dayIncome)}</Text>
              </Box>
              <Box
                w="100%"
                borderRadius="lg"
                overflow="hidden"
                bg={"red.100"}
                p="6"
              >
                <Heading size="md">Total Pengeluaran</Heading>
                <Text fontSize="3xl">{formatMoney(dayExpense)}</Text>
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
              <FcExport size={"24px"} />
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
