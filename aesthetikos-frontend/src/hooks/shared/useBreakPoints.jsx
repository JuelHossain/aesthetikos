// all imports

import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function useBreakPoints() {
  const theme = useMantineTheme();
  const xs = useMediaQuery(`(min-width:${theme.breakpoints.xs}) and (max-width:${theme.breakpoints.sm})`);
  const sm = useMediaQuery(`(min-width:${theme.breakpoints.sm}) and (max-width:${theme.breakpoints.md})`);
  const md = useMediaQuery(`(min-width:${theme.breakpoints.md}) and (max-width:${theme.breakpoints.lg})`);
  const lg = useMediaQuery(`(min-width:${theme.breakpoints.lg}) and (max-width:${theme.breakpoints.lg})`);
  const xl = useMediaQuery(`(min-width:${theme.breakpoints.xl})`);
  return [xs, sm, md, lg, xl];
}
