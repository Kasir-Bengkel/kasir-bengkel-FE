import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { Card } from "@chakra-ui/react";

export default function Notifikasi() {
  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Card p={4}></Card>
    </SidebarContainer>
  );
}
