// all imports

import Logo from "./Logo";
import SmallLogos from "./SmallLogos";
import Wave from "./Wave";

export default function BannerBackground() {
  return (
    <>
      <SmallLogos />
      <Logo className="absolute -rotate-[35deg] w-60 -bottom-20 right-0 z-0 opacity-10" path="fill-neu-5" />
      <Wave pathProp={{ className: "fill-sec-5/20" }} className="absolute bottom-0 z-10 w-full" />
    </>
  );
}
