import { List, ListItem } from "@chakra-ui/react";
import { FiHome, FiShoppingBag, FiBell } from "react-icons/fi";
import { NavItem } from "./Item";
import { useRouter } from "next/router";

const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: FiHome,
    path: "/admin",
  },
  {
    type: "link",
    label: "Buat Pesanan",
    icon: FiShoppingBag,
    path: "/admin/pesanan",
  },
  {
    type: "link",
    label: "Notifikasi",
    icon: FiBell,
    path: "/admin/notifikasi",
  },
];

export const Nav = ({ collapse }) => {
  const { asPath } = useRouter();

  return (
    <List w="full" my={8}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem
            item={item}
            isActive={asPath === item.path}
            collapse={collapse}
          />
        </ListItem>
      ))}
    </List>
  );
};
