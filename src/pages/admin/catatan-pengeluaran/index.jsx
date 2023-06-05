import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { useRouter } from "next/router";
import {
  Heading,
  Card,
  Text,
  HStack,
  SimpleGrid,
  Flex,
  VStack,
  Icon,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { FcTodoList, FcNeutralDecision, FcEngineering } from "react-icons/fc";
import { useAuthContext } from "@/context/AuthContext";

export default function CatatanPengeluaran() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Catatan Pengeluaran</Heading>
      <SimpleGrid mt={"16px"} columns={3} spacing={16}>
        <Card
          p={8}
          h={"150px"}
          onClick={() => {
            router.push("/admin/catatan-pengeluaran/pengeluaran-harian");
          }}
        >
          <VStack>
            <Center bg={"cyan.100"} borderRadius={"full"} w={12} h={12}>
              <Icon as={FcTodoList} w={8} h={8} />
            </Center>
            <Heading size={"md"}>Pengeluaran Harian</Heading>
          </VStack>
        </Card>
        <Card
          p={8}
          h={"150px"}
          onClick={() => {
            router.push("/admin/catatan-pengeluaran/pengeluaran-lainnya");
          }}
        >
          <VStack>
            <Center bg={"orange.100"} borderRadius={"full"} w={12} h={12}>
              <Icon as={FcNeutralDecision} w={8} h={8} />
            </Center>
            <Heading size={"md"}>Pengeluaran Lainnya</Heading>
          </VStack>
        </Card>
        <Card
          p={8}
          h={"150px"}
          onClick={() => {
            router.push("/admin/catatan-pengeluaran/part-jasa");
          }}
        >
          <VStack>
            <Center bg={"yellow.100"} borderRadius={"full"} w={12} h={12}>
              <Icon as={FcEngineering} w={8} h={8} />
            </Center>
            <Heading size={"md"}>Part/Jasa</Heading>
          </VStack>
        </Card>
      </SimpleGrid>
    </SidebarContainer>
  );
}
