// all imports

import { Stack, Text, Title } from "@mantine/core";
import { animated, useSpring } from "react-spring";
import Logo from "./Logo";

export default function BannerText() {
  const [style, api] = useSpring(() => ({ from: { scale: 0.5 }, to: { scale: 1 } }));

  return (
    <animated.div style={style}>
      <Stack className="container mx-auto px-5 justify-center items-center gap-0.5 pt-4">
        <Logo className="w-20 mb-4" path="fill-main-6" />
        <Title color="main">Aesthetikos</Title>
        <Text className="text-2xl tracking-wider text-center" color="sec">
          Swap Something Aesthetic
        </Text>
      </Stack>
    </animated.div>
  );
}
