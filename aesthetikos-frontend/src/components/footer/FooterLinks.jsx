// all imports

import { Link } from "react-router-dom";
import footerData from "./footerData";

export default function FooterLinks() {
  const linksElements = footerData.map((link) => (
    <Link className="no-underline text-sec-6 capitalize z-10" key={link.link} to={link.link}>
      {link.label}
    </Link>
  ));
  return (
    <div className="flex flex-col max-sm:p-2  gap-1 max-xs:items-center ">
      <h2 className="z-10 text-sec-9">UseFul Links</h2>
      <div className="flex flex-col max-xs:flex-row max-xs:flex-wrap max-xs:items-center max-xs:text-center max-xs:gap-4 gap-1 max-xs:justify-center max-xs:w-[260px] ">
        {linksElements}
      </div>
    </div>
  );
}
