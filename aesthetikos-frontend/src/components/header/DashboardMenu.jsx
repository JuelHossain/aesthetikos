import { ActionIcon, Menu, Stack } from "@mantine/core";

import { IconMenu } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
import { useHeaderContext } from "../../context/headerContext";
import DashboardSidebar from "../sidebar/DashboardSidebar";
import ProductsSidebar from "../sidebar/ProductsSidebar";
import UserSection from "./user/UserSection";
// import useLinks from "../nav/useLinks";
// import NavLInk from "./NavLink";

export default function DashboardMenu() {
  const { disclosure } = useHeaderContext();
  const [opened, { open, close }] = disclosure;
  // const { links } = useLinks();
  // const mobileNavs = links.map((nav) => <NavLInk key={nav.name} nav={nav} />);

  const { pathname } = useLocation();
  const inProducts = pathname.slice("1").startsWith("products");
  const inDashboard = pathname.slice("1").startsWith("dashboard");

  return (
    <Menu
      opened={opened}
      onClose={close}
      onOpen={open}
      transitionProps={{
        transition: "slide-right",
        duration: 150,
      }}
      zIndex={10000}
    >
      <Menu.Target>
        <ActionIcon variant="filled" color="white">
          <IconMenu />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown className="p-4 rounded-[40px] z-20 ">
        <Stack>
          <UserSection mobile />
          {/* //   <Stack spacing={8}>{mobileNavs}</Stack>  */}
          {inDashboard ? <DashboardSidebar /> : inProducts && <ProductsSidebar left />}
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
}
