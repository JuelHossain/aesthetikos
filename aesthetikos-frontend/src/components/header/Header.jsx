/* eslint-disable import/no-unresolved */
/* eslint-disable react/display-name */
import { Group } from "@mantine/core";
import { animated, useIsomorphicLayoutEffect, useSpring } from "react-spring";

import Logo from "../../pages/home/banner/logo";
import DashboardMenu from "./DashboardMenu";
import NavLinks from "./nav/NavLinks";
import DashboardLink from "./user/DashboardLink";
import LogoutButton from "./user/LogoutButton";

function AppHeader({ inview }) {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 0.95 },
      config: { mass: 2 },
      delay: 1000,
    }),
    [],
  );

  useIsomorphicLayoutEffect(() => {
    if (inview) return;

    api.start();
  }, [inview, api]);

  return (
    <animated.div
      style={{ ...props, position: inview ? "absolute" : "fixed" }}
      className={` top-4 p-2 h-[8vh] flex  items-center  ring-1 ring-main-5 rounded-xl scale-95 w-full bg-sec-2 max-w-md justify-center mx-auto z-20`}
    >
      <Group className="justify-between duration-500 w-full items-center " noWrap>
        <DashboardMenu />
        <Group spacing={0} className="justify-center w-full items-center" noWrap>
          <NavLinks />
          <Logo className="w-10 fill-main-6" />
          <DashboardLink />
        </Group>
        <LogoutButton />
      </Group>
    </animated.div>
  );
}

export default AppHeader;
