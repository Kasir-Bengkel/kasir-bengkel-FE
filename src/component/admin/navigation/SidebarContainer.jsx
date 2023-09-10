import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { FirebaseApp } from "@/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(FirebaseApp);

export default function SidebarContainer({ children, onSidebarWidth }) {
  const [collapse, setCollapse] = useState(false);

  const collapseHandler = () => {
    setCollapse(!collapse);
    onSidebarWidth(collapse ? 100 : 350);
  };

  const logoutClickHandler = () => {
    auth.signOut();
  };

  return (
    <HStack w="full" h="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRight={"1px"}
        borderColor={"gray.200"}
      >
        <Sidebar
          collapse={collapse}
          onCollapse={collapseHandler}
          onLogoutHandler={logoutClickHandler}
        />
      </Flex>
      <Box
        h={"full  "}
        w={"100%"}
        bg={useColorModeValue("gray.100", "gray.900")}
        p={4}
      >
        {children}
      </Box>
    </HStack>
  );
}
