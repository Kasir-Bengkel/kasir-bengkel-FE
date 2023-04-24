import { Box, IconButton, HStack } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { AvatarBox } from "./AvatarBox";
import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

export default function Sidebar({ collapse, onCollapse, onLogoutHandler }) {
  const collapseHandler = () => {
    onCollapse();
  };

  return (
    <>
      <Box w="full">
        <HStack>
          <Logo collapse={collapse} />
          <IconButton
            aria-label="Menu Colapse"
            icon={<MdMenu />}
            onClick={collapseHandler}
          />
        </HStack>
        <Nav collapse={collapse} />
      </Box>
      <AvatarBox collapse={collapse} onLogout={onLogoutHandler} />
    </>
  );
}
