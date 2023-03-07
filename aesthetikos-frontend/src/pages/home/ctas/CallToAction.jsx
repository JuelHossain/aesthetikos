// all imports

import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import Wave from "react-wavify";
import useBreakPoints from "../../../hooks/shared/useBreakPoints";

export default function CallToAction({ children, button, extra, ...prop }) {
  const { btmd, btsm } = useBreakPoints();
  return (
    <div
      {...prop}
      className={` rounded-3xl container mx-auto flex flex-col gap-4 p-8 sm:p-16 bg-sec-2/50 my-10 lg:my-20 relative m-0  ${extra}`}
    >
      <div className="sm:max-w-[60%]  z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sec-8 mt-0">{children}</h2>
        <Button size={btmd ? "xl" : btsm ? "lg" : "md"} component={Link} {...button}>
          {button?.text}
        </Button>
      </div>
      <div className="absolute top-48 right-0 left-0 mx-auto rotate-180">
        <Wave
          options={{
            amplitude: 50,
            speed: 0.3,
            points: 5,
          }}
        />
      </div>
    </div>
  );
}
