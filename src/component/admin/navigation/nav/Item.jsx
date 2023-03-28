import NextLink from "next/link";
import { ListIcon, Link, Heading, Box, Badge, Text } from "@chakra-ui/react";
import React from "react";

export const NavItem = ({ item, isActive, collapse }) => {
  const { label, path } = item;
  const { icon, notifications, messages } = item;

  return (
    <Box display="flex" alignItems="center" my={12} justifyContent="center">
      <Link
        href={path}
        as={NextLink}
        gap={1}
        display="flex"
        alignItems="center"
        _hover={{ textDecoration: "none", color: "black" }}
        fontWeight="medium"
        color={isActive ? "black" : "gray.400"}
        w="full"
        justifyContent={!collapse ? "center" : ""}
      >
        <ListIcon as={icon} fontSize={22} m="0" />
        {collapse && <Text>{label}</Text>}
      </Link>
      {collapse && (
        <React.Fragment>
          {notifications && (
            <Badge
              borderRadius="full"
              colorScheme="yellow"
              w={6}
              textAlign="center"
            >
              {notifications}
            </Badge>
          )}
          {messages && (
            <Badge
              borderRadius="full"
              colorScheme="green"
              w={6}
              textAlign="center"
            >
              {messages}
            </Badge>
          )}
        </React.Fragment>
      )}
    </Box>
  );
};
