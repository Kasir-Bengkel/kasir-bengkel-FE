import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { Heading, HStack, Input, Select, VStack, Box } from "@chakra-ui/react";
import HistoryTable from "@/component/admin/history-pesanan/HistoryTable";
import { useState } from "react";
import { DUMMY_PESANAN } from "@/constant/DummyData";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";

export default function HistoryPesanan() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  const [searchInvoice, setSearchInvoice] = useState("");
  const [searchPlat, setSearchPlat] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const filteredItems = DUMMY_PESANAN.filter(
    (pesanan) =>
      pesanan.invoice.toLowerCase().includes(searchInvoice.toLowerCase()) &&
      pesanan.plat_nomor.toLowerCase().includes(searchPlat.toLowerCase()) &&
      pesanan.waktu_order.toLowerCase().includes(searchDate.toLowerCase()) &&
      pesanan.status_invoice.toLowerCase().includes(searchStatus.toLowerCase())
  );

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
          <Select
            bg={"white"}
            placeholder="Status"
            onChange={(e) => setSearchStatus(e.target.value)}
          >
            <option value="lunas">Lunas</option>
            <option value="pending">Pending</option>
            <option value="hutang">Hutang</option>
          </Select>
        </HStack>

        <VStack
          mt={"12px"}
          spacing={8}
          overflowY={"scroll"}
          maxH={"80vh"}
          pb={4}
        >
          {filteredItems.map((item) => (
            <HistoryTable
              key={item.invoice}
              invoice={item.invoice}
              waktuOrder={item.waktu_order}
              namaKendaraan={item.nama_kendaraan}
              namaPemilik={item.nama_pemilik}
              metodePembayaran={item.metode_pembayaran}
              totalModal={item.total_modal}
              totalPendapatan={item.total_pendapatan}
              platNomor={item.plat_nomor}
              statusInvoice={item.status_invoice}
            />
          ))}
        </VStack>
      </Box>
    </SidebarContainer>
  );
}
