import { ActionIcon, Menu, Stack } from "@mantine/core";

import { IconMenu } from "@tabler/icons-react";
import { useLocation, useMatch } from "react-router-dom";
import { useHeaderContext } from "../../../context/headerContext";
import DashboardSidebar from "../../sidebar/DashboardSidebar";
import ProductsSidebar from "../../sidebar/ProductsSidebar";
// import useLinks from "../nav/useLinks";
// import NavLInk from "./NavLink";

export default function MobileLinks() {
  const { disclosure } = useHeaderContext();
  const [opened, { open, close }] = disclosure;
  // const { links } = useLinks();
  // const mobileNavs = links.map((nav) => <NavLInk key={nav.name} nav={nav} />);

  const { pathname } = useLocation();
  const inProducts = pathname.slice("1").startsWith("products");
  const inDashboard = pathname.slice("1").startsWith("dashboard");
  const home = useMatch("/");
  return (
    !home && (
      <Menu
        opened={opened}
        onClose={close}
        onOpen={open}
        className="md:hidden "
        transitionProps={{
          transition: "rotate-right",
          duration: 150,
        }}
      >
        <Menu.Target>
          <ActionIcon variant="subtle">
            <IconMenu />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown className="p-4  md:hidden z-[9999999]  ">
          <Stack>
            {/* <UserSection mobile />
          <Stack spacing={8}>{mobileNavs}</Stack> */}
            {inDashboard ? <DashboardSidebar /> : inProducts && <ProductsSidebar left />}
          </Stack>
        </Menu.Dropdown>
      </Menu>
    )
  );
}
