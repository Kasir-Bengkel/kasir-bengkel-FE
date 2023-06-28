import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Heading, Card, Center, Flex, Button } from "@chakra-ui/react";
import InvoiceCard from "@/component/admin/invoice/InvoiceCard";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";

export default function Invoice() {
  const { user } = useAuthContext();
  const router = useRouter();

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
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Flex justifyContent={"space-around"}>
        <Heading>Invoice</Heading>
        <Button colorScheme="blue" onClick={exportToPDF}>
          Download PDF
        </Button>
      </Flex>
      <Center mt={4} pb={4}>
        <Card p={4} w={"1000px"} id={"myDivToExport"}>
          <InvoiceCard nomor={"00010323"} mekanik={"wahyu"} />
        </Card>
      </Center>
    </SidebarContainer>
  );
}
