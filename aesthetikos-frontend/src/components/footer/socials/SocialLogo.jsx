// all imports

import AppStore from "./logos/AppStore";
import FacebookLogo from "./logos/FacebookLogo";
import PlayStore from "./logos/PlayStore";
import Twitter from "./logos/Twitter";
import YoutubeLogo from "./logos/YoutubeLogo";

export default function SocialLogo() {
  return (
    <div className="flex flex-col justify-center max-xs:items-center gap-6  xl:p-20 p-10 z-10 bg-sec-1/50 rounded-3xl">
      <h2 className="sm:text-3xl text-sec-9 tracking-wide m-0">Follow us</h2>
      <div className="flex md:flex-row flex-col max-xs:items-center gap-6">
        <div className="z-10 flex gap-4">
          <FacebookLogo className="h-8 xs:h-10 sm:h-12 md:h-14" />
          <YoutubeLogo className="h-8 xs:h-10 sm:h-12 md:h-14" />
          <Twitter className="h-8 xs:h-10 sm:h-12 md:h-14" />
        </div>
        <div className="z-10 flex gap-4">
          <AppStore className="h-8 xs:h-10 sm:h-12 md:h-14" />
          <PlayStore className="h-8 xs:h-10 sm:h-12 md:h-14" />
        </div>
      </div>
    </div>
  );
}
