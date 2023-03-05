// all imports

import { useInView } from "react-spring";
import AppHeader from "../../../components/header/Header";
import Wave from "./Wave";

export default function NavigationBar() {
  const [ref, inview] = useInView();
  return (
    <div ref={ref} className="relative flex justify-center">
      <AppHeader inview={inview} />
      <Wave pathProp={{ className: "fill-sec-5/20" }} className="rotate-180 w-full  " />
    </div>
  );
}
