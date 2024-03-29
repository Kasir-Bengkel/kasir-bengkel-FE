import {
  Avatar,
  Flex,
  Text,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdOutlineMoreHoriz, MdLogout, MdRecentActors } from "react-icons/md";
import { useRoleContext } from "@/context/RoleContext";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";

export const AvatarBox = ({ collapse, onLogout }) => {
  const { user } = useAuthContext();
  const { role } = useRoleContext();

  return (
    <Flex
      borderWidth={collapse ? 1 : 0}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexDirection={collapse ? "row" : "column-reverse"}
    >
      <Avatar name={role} bg="teal.300" />
      {collapse && (
        <Flex
          w="full"
          flexDirection="column"
          gap={4}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text fontSize="sm" fontWeight="bold" pb="0" lineHeight={0}>
            {role}
          </Text>
          <Text as="small" color="gray.500" fontSize={12} lineHeight={0}>
            {user === null ? "" : user.email}
          </Text>
        </Flex>
      )}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdOutlineMoreHoriz />}
        />
        <MenuList>
          <MenuItem icon={<MdRecentActors />}>Aktivitas Akun</MenuItem>
          <MenuItem
            icon={<MdLogout color="red" />}
            color="red"
            onClick={onLogout}
          >
            Keluar
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
