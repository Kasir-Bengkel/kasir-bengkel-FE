import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import GrandReport from "@/component/admin/report/GrandReport";
import ReportFilterDate from "@/component/admin/report/ReportFilterDate";
import ReportTable from "@/component/admin/report/ReportTable";
import { Heading, Flex, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";

export default function ReportTest() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Flex justifyContent={"space-between"}>
        <Heading>Report</Heading>
        {/* <Button colorScheme="blue">Download as xls.</Button> */}
      </Flex>
      <Flex justifyContent={"space-between"}>
        <ReportFilterDate />
        <GrandReport />
      </Flex>
      <ReportTable />
    </SidebarContainer>
  );
}
