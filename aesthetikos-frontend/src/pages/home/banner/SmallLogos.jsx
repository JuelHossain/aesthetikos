// all imports
import { useState } from "react";
import { animated, useIsomorphicLayoutEffect, useSprings } from "react-spring";
import Logo from "../../../components/shared/Logo";
import useBreakPoints from "../../../hooks/shared/useBreakPoints";
import random from "../../../utils/random";

export default function SmallLogos() {
  const { xs, sm, md, lg, xl } = useBreakPoints();
  const [from, setFrom] = useState(-400);

  const [springs, api] = useSprings(6, () => ({
    from: { y: -800 },
    to: [
      {
        y: random(0, 25),
        x: random(-10, 10),
      },
      {
        y: random(from, 0),
        // x: random(
        //   xs ? -200 : sm ? -400 : md ? -600 : lg ? -800 : xl ? -1000 : -50,
        //   xs ? 200 : sm ? -200 : md ? -300 : lg ? -400 : xl ? -500 : 50,
        // ),
      },
    ],

    config: { mass: 4 },
  }));
  console.log(from);
  useIsomorphicLayoutEffect(() => {
    switch (true) {
      case xs:
        setFrom(-500);

        break;
      case sm:
        setFrom(-700);

        break;
      case md:
        setFrom(-800);

        break;
      case lg:
        setFrom(-900);
        api.start();

        break;
      case xl:
        setFrom(-1000);
        api.start();

        break;

      default:
        setFrom(-400);
        api.start();

        break;
    }
    api.start();
  }, [xs, sm, md, lg, xl]);

  const smallLogos = springs.map((props) => (
    <animated.div key={Math.random()} style={props} className="">
      <Logo className=" w-10 xs:w-20 sm:w-24  opacity-10" path="fill-neu-5" />
    </animated.div>
  ));
  return <div className="absolute w-full flex gap-8 z-[1] bottom-10 items-center justify-center ">{smallLogos}</div>;
}
