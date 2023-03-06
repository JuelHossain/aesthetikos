/* eslint-disable import/no-unresolved */
/* eslint-disable react/display-name */
import { Group } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useMatch } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import SideBarNav from "../sidebar/SidebarNav";
import ChangeTheme from "./ChangeTheme";

import DashboardMenu from "./DashboardMenu";
import LogoutButton from "./user/LogoutButton";

function AppHeader() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 0.95 },
    }),
    [],
  );
  const [{ y }] = useWindowScroll();
  console.log("y :>> ", y);

  const home = useMatch("/");
  return (
    <animated.div
      style={{ ...props, position: y < 1000 ? "absolute" : "fixed" }}
      className={` top-4 px-2 flex  items-center  rounded-xl  w-full ring max-w-md justify-center mx-auto z-20 bg-main-2`}
    >
      <Group className="justify-between duration-500 w-full items-center " noWrap>
        {home ? <ChangeTheme /> : <DashboardMenu />}
        <SideBarNav extra="mb-1" />
        <LogoutButton />
      </Group>
    </animated.div>
  );
}

export default AppHeader;
