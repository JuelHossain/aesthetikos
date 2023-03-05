import { ActionIcon, Menu, Stack, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { IconMenu } from "@tabler/icons-react";
import { useLocation, useMatch } from "react-router-dom";
import { useHeaderContext } from "../../context/headerContext";
import DashboardSidebar from "../sidebar/DashboardSidebar";
import ProductsSidebar from "../sidebar/ProductsSidebar";
import ChangeTheme from "./ChangeTheme";
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
  const home = useMatch("/");
  const theme = useMantineTheme();
  const smallerThenMd = useMediaQuery(`(max-width:${theme.breakpoints.md})`);

  return !home && smallerThenMd ? (
    <Menu
      opened={opened}
      onClose={close}
      onOpen={open}
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
      <Menu.Dropdown className="p-4  ">
        <Stack>
          <UserSection mobile />
          {/* //   <Stack spacing={8}>{mobileNavs}</Stack>  */}
          {inDashboard ? <DashboardSidebar /> : inProducts && <ProductsSidebar left />}
        </Stack>
      </Menu.Dropdown>
    </Menu>
  ) : (
    <ChangeTheme />
  );
}
