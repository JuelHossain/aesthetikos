import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { Box, ColorSchemeProvider, LoadingOverlay, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import useAxiosSetup from "./hooks/auth/useAxiosSetup";
import useRouter from "./router";
import { darkColors, lightColors } from "./utils/colors";

function Mantine() {
  const { mode, toggleMode } = useThemeMode();
  const customTheme = {
    primaryColor: "main",
    colors: mode === "dark" ? darkColors : lightColors,
  };
  const theme = useTheme(customTheme);

  useAxiosSetup();
  const router = useRouter();
  return (
    <ColorSchemeProvider colorScheme={mode} toggleColorScheme={toggleMode}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <RouterProvider
          fallbackElement={
            <Box>
              <LoadingOverlay visible loaderProps={{ variant: "bars" }} />
            </Box>
          }
          router={router}
        />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Mantine;