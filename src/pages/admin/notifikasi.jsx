import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

export default function Notifikasi() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  return (
    <SidebarContainer>
      <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight="bold" color="red.500">
            404
          </Text>
          <Text fontSize="xl" mt={4}>
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </Text>
          <Button
            colorScheme="blue"
            mt={8}
            onClick={() => {
              router.push("/admin");
            }}
          >
            Go to dashboard
          </Button>
        </Box>
      </Flex>
    </SidebarContainer>
  );
}
