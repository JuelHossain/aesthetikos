/* eslint-disable import/no-unresolved */
/* eslint-disable react/display-name */
import { Button, Group } from "@mantine/core";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Logo from "../../pages/home/banner/logo";

function AppHeader({ inview }) {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0 },

      config: { mass: 2 },
    }),
    [],
  );

  useEffect(() => {
    if (!inview) {
      console.log("api :>> ", api);
      api.start({ to: { opacity: 1, scale: 0.95 } });
    }
  }, [inview, api]);

  return (
    <animated.div
      style={{ ...props, position: inview ? "absolute" : "fixed" }}
      className={` top-4 p-2 h-[8vh] flex  items-center  ring-1 ring-main-5 rounded-xl scale-95 w-full z-[1000000000] bg-sec-2`}
    >
      <Group className="justify-between duration-500 w-full items-end " noWrap>
        {/* <MobileLinks /> */}
        <Group spacing={0} className="justify-center w-full items-center">
          <Button className="text-lg" variant="subtle">
            Products
          </Button>
          <Logo className="w-10 fill-main-6" />
          <Button className="text-lg" variant="subtle">
            Login
          </Button>
        </Group>

        {/* <UserSection /> */}
      </Group>
    </animated.div>
  );
}

export default AppHeader;
