import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { Heading, HStack, Input, Select, VStack, Box } from "@chakra-ui/react";
import HistoryTable from "@/component/admin/history-pesanan/HistoryTable";
import { useState, useEffect } from "react";
import { DUMMY_PESANAN } from "@/constant/DummyData";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import Loading from "@/component/Loading";
import salesOrderQuery from "../api/salesorders-query";

export default function HistoryPesanan() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const [searchInvoice, setSearchInvoice] = useState("");
  const [searchPlat, setSearchPlat] = useState("");
  const [searchDate, setSearchDate] = useState("");
  // const [searchStatus, setSearchStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [salesOrders, setSalesOrders] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    async function getSalesOrdersHandler() {
      setIsLoading(true);
      const salesOrdersData = await salesOrderQuery({
        method: "GET",
      });
      setSalesOrders(salesOrdersData.data.items);
      setIsLoading(false);
    }
    getSalesOrdersHandler();
  }, []);

  useEffect(() => {
    if (salesOrders !== undefined) {
      const newFilteredItems = salesOrders.filter(
        (order) =>
          order.invoiceNumber
            .toLowerCase()
            .includes(searchInvoice.toLowerCase()) &&
          order.licensePlate.toLowerCase().includes(searchPlat.toLowerCase()) &&
          order.invoiceDate.toLowerCase().includes(searchDate.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    }
  }, [salesOrders, searchInvoice, searchPlat, searchDate]);

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Box px={8}>
        <Heading>Pesanan Masuk</Heading>
        <HStack mt={"12px"}>
          <Input
            bg={"white"}
            placeholder="No Invoice"
            onChange={(e) => setSearchInvoice(e.target.value)}
          />
          <Input
            bg={"white"}
            placeholder="Plat Nomor"
            onChange={(e) => setSearchPlat(e.target.value)}
          />
          <Input
            bg={"white"}
            placeholder="Tanggal"
            type="date"
            onChange={(e) => setSearchDate(e.target.value)}
          />
          {/* <Select
            bg={"white"}
            placeholder="Status"
            onChange={(e) => setSearchStatus(e.target.value)}
          >
            <option value="lunas">Lunas</option>
            <option value="pending">Pending</option>
            <option value="hutang">Hutang</option>
          </Select> */}
        </HStack>

        {isLoading && filteredItems.length > 0 ? (
          <Loading />
        ) : (
          <VStack
            mt={"12px"}
            spacing={8}
            overflowY={"scroll"}
            maxH={"80vh"}
            pb={4}
          >
            {filteredItems.map((item) => (
              <HistoryTable
                key={item.id}
                id={item.id}
                invoice={item.invoiceNumber}
                waktuOrder={item.invoiceDate}
                namaKendaraan={item.vehicleName}
                namaPemilik={item.customerName}
                metodePembayaran={item.payment}
                salesOrderDetail={item.salesOrderDetails}
                platNomor={item.licensePlate}
              />
            ))}
          </VStack>
        )}
      </Box>
    </SidebarContainer>
  );
}
