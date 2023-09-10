import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Heading,
  Card,
  Center,
  Flex,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import InvoiceCard from "@/component/admin/invoice/InvoiceCard";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useSalesOrderContext } from "@/context/SalesOrderContext";

export default function Invoice() {
  const { user } = useAuthContext();
  const router = useRouter();

  const { salesOrder } = useSalesOrderContext();

  // const [totalPayment, setTotalPayment] = useState(0);

  // useEffect(() => {
  //   const accSelling = salesOrder.salesOrderDetails.reduce(
  //     (accumulator, currentValue) => {
  //       const { sellingPrice, quantity } = currentValue;
  //       const selling = sellingPrice * quantity;
  //       return accumulator + selling;
  //     },
  //     0
  //   );
  //   setTotalPayment(accSelling);
  // }, [salesOrder]);

  const [invoiceDetail, setInvoiceDetail] = useState({
    customerName: salesOrder.customerName,
    discount: salesOrder.discount,
    id: salesOrder.id,
    invoiceDate: salesOrder.invoiceDate,
    invoiceNumber: salesOrder.invoiceNumber,
    licensePlate: salesOrder.licensePlate,
    mechanicsName: salesOrder.mechanicsName,
    payment: salesOrder.payment,
    phoneNumber: salesOrder.phoneNumber,
    salesOrderDetails: salesOrder.salesOrderDetails,
    totalPrice: salesOrder.totalPrice,
    vehicleName: salesOrder.vehicleName,
  });

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  const exportToPDF = () => {
    const divToExport = document.getElementById("myDivToExport");
    const divWidth = divToExport.offsetWidth;
    const divHeight = divToExport.offsetHeight;
    html2canvas(divToExport).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "px", [divWidth, divHeight]);
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const ratio = imgProps.width / imgProps.height;
      let imgWidth = pdfWidth;
      let imgHeight = imgWidth / ratio;
      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = imgHeight * ratio;
      }
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("export.pdf");
    });
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex justifyContent={"space-around"} gap={56} pt={4}>
        <Heading>Invoice</Heading>
        <Button colorScheme="blue" onClick={exportToPDF}>
          Download PDF
        </Button>
      </Flex>
      <Center mt={4} pb={4}>
        <Card p={4} w={"1000px"} id={"myDivToExport"}>
          <InvoiceCard invoiceDetail={invoiceDetail} />
        </Card>
      </Center>
    </Box>
  );
}
