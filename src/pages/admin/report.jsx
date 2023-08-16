import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import GrandReport from "@/component/admin/report/GrandReport";
import ReportFilterDate from "@/component/admin/report/ReportFilterDate";
import ReportTable from "@/component/admin/report/ReportTable";
import { Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import salesOrdersQuery from "../api/salesorders-query";
import incomeQuery from "../api/income-query";
import expenseDayQuery from "../api/expenseday-query";
import expenseOtherQuery from "../api/expenseother-query";
import grandProfitQuery from "../api/grandprofit-query";

export default function ReportTest() {
  const { user } = useAuthContext();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [salesOrders, setSalesOrders] = useState();
  const [filteredOrders, setFilteredOrders] = useState();
  const [income, setIncome] = useState(0);
  const [searchDateOrder, setSearchOrderDate] = useState("");
  const [expenseDay, setExpenseDay] = useState(0);
  const [expenseOther, setExpenseOther] = useState(0);
  const [grandProfit, setGrandProfit] = useState(0);

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  useEffect(() => {
    async function getSalesOrdersHandler() {
      setIsLoading(true);
      const salesOrdersData = await salesOrdersQuery({
        method: "GET",
      });
      setSalesOrders(salesOrdersData.data.items);
      setIsLoading(false);
    }

    async function getIncomeHandler() {
      const incomeData = await incomeQuery({
        method: "GET",
      });
      setIncome(incomeData.data.income);
    }

    async function getExpenseDay() {
      const expenseDayData = await expenseDayQuery({
        method: "GET",
      });
      setExpenseDay(expenseDayData.data.subtotal);
    }

    async function getExpenseOther() {
      const expenseOtherData = await expenseOtherQuery({
        method: "GET",
      });
      setExpenseOther(expenseOtherData.data.subtotal);
    }

    async function getGrandProfit() {
      const grandProfitData = await grandProfitQuery({
        method: "GET",
      });
      setGrandProfit(grandProfitData.data.totalProfit);
    }

    getSalesOrdersHandler();
    getIncomeHandler();
    getExpenseDay();
    getExpenseOther();
    getGrandProfit();
  }, []);

  useEffect(() => {
    if (salesOrders !== undefined) {
      const newFilteredItems = salesOrders.filter((order) =>
        order.invoiceDate.includes(searchDateOrder)
      );
      setFilteredOrders(newFilteredItems);
    }
  }, [salesOrders, searchDateOrder]);

  function dateChangeHandler(date) {
    setSearchOrderDate(date);
  }

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Flex justifyContent={"space-between"}>
        <Heading>Report</Heading>
        {/* <Button colorScheme="blue">Download as xls.</Button> */}
      </Flex>
      <Flex justifyContent={"space-between"}>
        <ReportFilterDate onDateChange={dateChangeHandler} />
        <GrandReport
          income={income}
          expenseDay={expenseDay}
          expenseOther={expenseOther}
          grandProfit={grandProfit}
        />
      </Flex>
      {filteredOrders !== undefined && (
        <ReportTable salesOrders={filteredOrders} />
      )}
    </SidebarContainer>
  );
}
