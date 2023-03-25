import Sidebar from "@/component/admin/Sidebar";

import {
  Card,
  Flex,
  HStack,
  Avatar,
  VStack,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";

import { FcBusinessman, FcSmartphoneTablet, FcSupport } from "react-icons/fc";

export default function ProfileTest() {
  return (
    <Sidebar>
      <Card p={4}>
        <Flex alignItems={"center"}>
          <HStack>
            <Avatar
              size={"md"}
              src={
                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="md">Senyum Bagito</Text>
              <Text fontSize="sm" color="gray.600">
                Admin
              </Text>
            </VStack>
          </HStack>
        </Flex>
      </Card>
      <Card mt={4} p={4}>
        <VStack>
          <Box>
            <HStack>
              <Icon as={FcBusinessman} />
              <VStack>
                <Text>Profile</Text>
                <Text>Biodata Diri</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Card>
    </Sidebar>
  );
}
