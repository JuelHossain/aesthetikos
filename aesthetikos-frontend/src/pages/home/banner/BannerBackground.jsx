// all imports

import Wave from "react-wavify";
import useBreakPoints from "../../../hooks/shared/useBreakPoints";
import SmallLogos from "./SmallLogos";

export default function BannerBackground() {
  const { btxl, btlg, btmd, btsm, btxs } = useBreakPoints();
  return (
    <div className=" ">
      <SmallLogos />
      <Wave
        className="bg-sec-5/20  h-full absolute  rotate-180 z-[1] bottom-0"
        options={{
          height: btxl ? 250 : btmd ? 200 : btxs ? 150 : 100,
          amplitude: 50,
          speed: 0.3,
          points: btlg ? 5 : btmd ? 4 : 3,
        }}
      />
      {/* <Wave
        pathProp={{ className: "fill-sec-5/20" }}
        className="absolute bottom-0 xs:-bottom-10 sm:-bottom-16 md:-bottom-36 lg:-bottom-48 xl:-bottom-60 xxl:-bottom-80 z-10 w-full "
      /> */}
    </div>
  );
}
