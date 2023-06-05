import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { Card } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";

export default function Notifikasi() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Card p={4}></Card>
    </SidebarContainer>
  );
}
