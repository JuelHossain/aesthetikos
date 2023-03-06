import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { Box, ColorSchemeProvider, LoadingOverlay, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import useAxiosSetup from "./hooks/auth/useAxiosSetup";
import useRouter from "./router";
import { darkColors, lightColors } from "./utils/colors";

function Mantine() {
  const { mode, toggleMode } = useThemeMode();
  const customTheme = {
    primaryColor: "main",
    colors: mode === "dark" ? darkColors : lightColors,
    components: {
      Button: {
        defaultProps: {
          radius: "lg",
        },
      },
      TextInput: {
        defaultProps: {
          variant: "default",
          size: "md",
          classNames: { input: " rounded-lg ", label: "text-main-7" },
        },
      },
      PasswordInput: {
        defaultProps: {
          variant: "default",
          size: "md",
          classNames: { input: " rounded-lg ", label: "text-main-7" },
        },
      },
    },
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
        <Notifications />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Mantine;
