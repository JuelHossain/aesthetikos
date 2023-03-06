// all imports

import Wave from "react-wavify";
import useBreakPoints from "../../../hooks/shared/useBreakPoints";
import SmallLogos from "./SmallLogos";

export default function BannerBackground() {
  const [xs, sm, md, lg, xl] = useBreakPoints();
  return (
    <div className=" ">
      <SmallLogos />

      <Wave
        className="bg-sec-5/20  h-full absolute  rotate-180 z-0 bottom-0"
        options={{
          height: xl ? 250 : md ? 250 : sm ? 200 : xs ? 150 : 100,
          amplitude: 50,
          speed: 0.3,
          points: 5,
        }}
      />
      {/* <Wave
        pathProp={{ className: "fill-sec-5/20" }}
        className="absolute bottom-0 xs:-bottom-10 sm:-bottom-16 md:-bottom-36 lg:-bottom-48 xl:-bottom-60 xxl:-bottom-80 z-10 w-full "
      /> */}
    </div>
  );
}
