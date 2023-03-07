// all imports

import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMatch } from "react-router-dom";
import Wave from "react-wavify";
import AppHeader from "../../../components/header/Header";

export default function NavigationBar() {
  const theme = useMantineTheme();
  const home = useMatch("/");
  const smallerThenMd = useMediaQuery(`(max-width:${theme.breakpoints.md})`);

  return smallerThenMd ? (
    <div className="relative flex justify-center">
      <AppHeader />
      <Wave
        className="bg-sec-5/20 "
        options={{
          height: 100,
          amplitude: 50,
          speed: 0.3,
          points: 5,
        }}
      />
    </div>
  ) : (
    home && (
      <div className="relative flex justify-center">
        <AppHeader />
        <Wave
          className="bg-sec-5/20 "
          options={{
            height: 100,
            amplitude: 50,
            speed: 0.3,
            points: 5,
          }}
        />
      </div>
    )
  );
}
