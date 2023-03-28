import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import GrandReport from "@/component/admin/report/GrandReport";
import ReportFilterDate from "@/component/admin/report/ReportFilterDate";
import ReportTable from "@/component/admin/report/ReportTable";
import { Heading } from "@chakra-ui/react";

export default function ReportTest() {
  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Report</Heading>
      <GrandReport />
      <ReportFilterDate />
      <ReportTable />
    </SidebarContainer>
  );
}