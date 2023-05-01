import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import GrandReport from "@/component/admin/report/GrandReport";
import ReportFilterDate from "@/component/admin/report/ReportFilterDate";
import ReportTable from "@/component/admin/report/ReportTable";
import { Heading, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";

export default function ReportTest() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Flex justifyContent={"space-between"}>
        <Heading>Report</Heading>
        <Button colorScheme="blue">Download as xls.</Button>
      </Flex>

      <GrandReport />
      <ReportFilterDate />
      <ReportTable />
    </SidebarContainer>
  );
}
