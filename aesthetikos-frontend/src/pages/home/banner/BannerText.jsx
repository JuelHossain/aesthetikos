// all imports

import { Stack, Text } from "@mantine/core";
import { animated, useSpring } from "react-spring";
import Logo from "../../../components/shared/Logo";

export default function BannerText() {
  const [style, api] = useSpring(() => ({ from: { scale: 0.5 }, to: { scale: 1 } }));

  return (
    <animated.div style={style}>
      <Stack className="container mx-auto px-5 justify-center items-center gap-0.5 pt-4 sm:gap-4 ">
        <Logo className="w-20 xs:w-28 sm:w-32 md:w-36 lg:w-40 mb-4" path="fill-main-6" />
        <div className="text-center sm:space-y-4">
          {" "}
          <h1 className="m-0 text-main-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Aesthetikos</h1>
          <Text
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  tracking-wider text-center"
            color="sec"
          >
            Swap Something Aesthetic
          </Text>
        </div>
      </Stack>
    </animated.div>
  );
}
