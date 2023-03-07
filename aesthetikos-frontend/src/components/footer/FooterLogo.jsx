// all imports

import Logo from "../shared/Logo";

export default function FooterLogo() {
  return (
    <div className="flex gap-6 items-center xl:p-20 py-20 z-[1] max-sm:px-5 max-xs:flex-col max-xs:text-center ">
      <Logo className="w-32" path="fill-sec-9" />
      <div className="">
        <h2 className="m-0 text-4xl xs:text-6xl tracking-widest text-sec-7">Aesthetikos</h2>
        <p className="m-0  text-2xl xs:text-4xl tracking-widest text-sec-7">Swap Something Aesthetic</p>
      </div>
    </div>
  );
}
