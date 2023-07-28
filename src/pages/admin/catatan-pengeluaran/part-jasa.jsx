import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Heading,
  Card,
  HStack,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import TablePartJasa from "@/component/admin/part-jasa/TablePartJasa";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import stocksQuery from "@/pages/api/stocks-query";
import salesOrdersQuery from "@/pages/api/salesorders-query";
import Loading from "@/component/Loading";

export default function PartJasa() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const [loading, setLoading] = useState(false);
  const [partJasaObj, setPartJasaObj] = useState([]);

  useEffect(() => {
    async function getInvoiceNumberHandler(items) {
      //take id of the filteredTypeStocks
      const itemsId = items.map((item) => {
        return item.id;
      });

      //get invoice number
      const salesOrdersData = await salesOrdersQuery({
        method: "GET",
      });

      for (let i = 0; i < itemsId.length; i++) {
        for (const data of salesOrdersData.data.items) {
          const detail = data.salesOrderDetails.find(
            (item) => item.id === itemsId[i]
          );
          if (detail) {
            items[i].invoiceNumber = data.invoiceNumber;
          }
        }
      }
      setPartJasaObj(items);
      setLoading(false);
    }

    async function getStocksHandler() {
      setLoading(true);
      const stocksData = await stocksQuery({
        method: "GET",
      });
      if (stocksData.data !== undefined) {
        const { items } = stocksData.data;
        const filterTypeItems = items.filter(
          (item) => item.types === "SERVICE" || item.types === "PART"
        );
        getInvoiceNumberHandler(filterTypeItems);
      }
    }
    getStocksHandler();
  }, []);

  const [searchName, setSearchName] = useState("");
  const [searchInvoice, setSearchInvoice] = useState("");

  const filteredItems = partJasaObj.filter(
    (item) =>
      item.stockName.toLowerCase().includes(searchName.toLowerCase()) &&
      item.invoiceNumber.toLowerCase().includes(searchInvoice.toLowerCase())
  );

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Part/Jasa</Heading>

      <Card mt={"12px"} px={4} py={8}>
        <HStack spacing={6}>
          <Input
            placeholder="No invoice"
            onChange={(e) => setSearchInvoice(e.target.value)}
          />
          <Input
            placeholder="Nama Part/Jasa"
            onChange={(e) => setSearchName(e.target.value)}
          />
        </HStack>

        {loading ? (
          <Loading />
        ) : (
          <TableContainer mt={"12px"}>
            <Table variant="striped" colorScheme={"blackAlpha"}>
              <Thead>
                <Tr>
                  <Th w={"13%"}>No. Invoice</Th>
                  <Th>Date</Th>
                  <Th w={"30%"}>Nama Part/Jasa</Th>
                  <Th>Harga Modal</Th>
                  <Th>Harga Jual</Th>
                  <Th>Profit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredItems.map((item) => (
                  <TablePartJasa
                    key={item.id}
                    id={item.id}
                    invoice={item.invoiceNumber}
                    jual={item.sellingPrice}
                    modal={item.equityPrice}
                    nama={item.stockName}
                    date={item.date}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Card>
    </SidebarContainer>
  );
}
