// all imports

import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function useBreakPoints() {
  const theme = useMantineTheme();
  const xs = useMediaQuery(`(min-width:${theme.breakpoints.xs}) and (max-width:${theme.breakpoints.sm})`);
  const sm = useMediaQuery(`(min-width:${theme.breakpoints.sm}) and (max-width:${theme.breakpoints.md})`);
  const md = useMediaQuery(`(min-width:${theme.breakpoints.md}) and (max-width:${theme.breakpoints.lg})`);
  const lg = useMediaQuery(`(min-width:${theme.breakpoints.lg}) and (max-width:${theme.breakpoints.lg})`);
  const btxs = useMediaQuery(`(min-width:${theme.breakpoints.xs})`);
  const btsm = useMediaQuery(`(min-width:${theme.breakpoints.sm})`);
  const btmd = useMediaQuery(`(min-width:${theme.breakpoints.md})`);
  const btlg = useMediaQuery(`(min-width:${theme.breakpoints.lg})`);
  const btxl = useMediaQuery(`(min-width:${theme.breakpoints.xl})`);
  const btxxl = useMediaQuery(`(min-width:1600px)`);
  const stxs = useMediaQuery(`(max-width:${theme.breakpoints.xs})`);
  const stsm = useMediaQuery(`(max-width:${theme.breakpoints.sm})`);
  const stmd = useMediaQuery(`(max-width:${theme.breakpoints.md})`);
  const stlg = useMediaQuery(`(max-width:${theme.breakpoints.lg})`);
  const stxl = useMediaQuery(`(max-width:${theme.breakpoints.xl})`);

  return { xs, sm, md, lg, stxs, stsm, stmd, stlg, stxl, btxs, btsm, btmd, btlg, btxl, btxxl };
}
