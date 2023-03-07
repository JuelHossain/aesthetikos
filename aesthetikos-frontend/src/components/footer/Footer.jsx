import { IconCopyright } from "@tabler/icons-react";
import Wave from "react-wavify";
import useBreakPoints from "../../hooks/shared/useBreakPoints";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import SocialLogo from "./socials/SocialLogo";

export default function Footer() {
  const { xs, sm, md, lg, xl } = useBreakPoints();

  return (
    <footer className="mt-10 sm:mt-20">
      <div className="container mx-auto">
        <div className="flex gap-6 justify-between md:items-start max-w-screen-xl mx-auto mb-10 flex-col sm:flex-row-reverse md:flex-row flex-1 max-md:p-4">
          <FooterLinks />
          <SocialLogo />
        </div>
        <FooterLogo />
      </div>
      <Wave
        className="bg-sec-3/20  h-full absolute  rotate-180 z-0 bottom-0"
        options={{
          height: 280,
          amplitude: 50,
          speed: 0.3,
          points: 5,
        }}
      />
      <div className="flex justify-center items-center bg-sec-9 gap-2 text-sec-3">
        <IconCopyright />
        <p className="m-2">2023 All Rights Reserved aesthetikos.co</p>
      </div>
    </footer>
  );
}
