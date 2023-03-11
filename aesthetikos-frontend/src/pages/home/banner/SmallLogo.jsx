// all imports\
import { useIsomorphicEffect, useViewportSize } from "@mantine/hooks";
import { animated, useSpring } from "react-spring";
import Logo from "../../../components/shared/Logo";
import random from "../../../utils/random";

export default function SmallLogo() {
  const { width, height } = useViewportSize();
  const [spring, api] = useSpring(() => ({
    config: { mass: 4 },
  }));

  useIsomorphicEffect(() => {
    api.start({
      to: [
        {
          y: random(-100, 0),
          x: random(-100, 100),
        },
        {
          y: random(-height / 1.4, -300),
          x: random(-width / 2, width / 2),
        },
      ],
    });
  }, [width, height, api]);
  return (
    <animated.div key={Math.random()} style={spring} className="">
      <Logo className=" w-10 xs:w-20 sm:w-24  opacity-10" path="fill-neu-5" />
    </animated.div>
  );
}
