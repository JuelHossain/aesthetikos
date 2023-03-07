// all imports

import { useMatch } from "react-router-dom";
import Wave from "react-wavify";
import AppHeader from "../../../components/header/Header";
import useBreakPoints from "../../../hooks/shared/useBreakPoints";

export default function NavigationBar() {
  const home = useMatch("/");
  const { stmd, btlg, btmd } = useBreakPoints();

  return stmd ? (
    <div className="relative flex justify-center">
      <AppHeader />
      <Wave
        className="bg-sec-5/20 z-[1] "
        options={{
          height: 100,
          amplitude: 33,
          speed: 0.3,
          points: btlg ? 5 : btmd ? 4 : 3,
        }}
      />
    </div>
  ) : (
    home && (
      <div className="relative flex justify-center ">
        <AppHeader />
        <Wave
          className="bg-sec-5/20 z-[1] "
          options={{
            height: 100,
            amplitude: 33,
            speed: 0.3,
            points: btlg ? 5 : btmd ? 4 : 3,
          }}
        />
      </div>
    )
  );
}
