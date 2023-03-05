// all imports
import { animated, useSprings } from "react-spring";
import random from "../../../utils/random";
import Logo from "./Logo";

export default function SmallLogos() {
  const [springs] = useSprings(6, () => ({
    from: { y: -800 },
    to: [
      {
        y: random(0, 25),
        x: random(-10, 10),
      },
      {
        y: random(-50, -400),
        x: random(-100, 100),
      },
    ],

    config: { mass: 4 },
  }));

  const smallLogos = springs.map((props) => (
    <animated.div key={Math.random()} style={props}>
      <Logo className=" w-10  opacity-10" path="fill-neu-5" />
    </animated.div>
  ));
  return <div className="absolute flex gap-8 z-0 bottom-10 items-center justify-center  w-full">{smallLogos}</div>;
}
