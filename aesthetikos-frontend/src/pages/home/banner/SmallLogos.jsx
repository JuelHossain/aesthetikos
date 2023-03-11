// all imports

import SmallLogo from "./SmallLogo";

export default function SmallLogos() {
  const smallLogos = [1, 2, 3, 4, 5, 6].map((n) => <SmallLogo key={Math.random()} />);
  return <div className="absolute w-full flex gap-8 z-[2] bottom-10 items-center justify-center ">{smallLogos}</div>;
}
