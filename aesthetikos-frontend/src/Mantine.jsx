import { useTheme, useThemeMode } from "@juel/hooks/theme";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/shared/Loading";
import { useColorsContext } from "./context/colorsContext";
import useAxiosSetup from "./hooks/auth/useAxiosSetup";
import useRouter from "./router";

function Mantine() {
  const { mode, toggleMode } = useThemeMode();
  const [colors] = useColorsContext();
  const customTheme = {
    primaryColor: "main",
    colors,
    fontFamily: "tilt neon",

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
      Input: {
        defaultProps: {
          variant: "default",
          size: "md",
          classNames: { input: " rounded-lg ", label: "text-main-7" },
        },
      },
      NumberInput: {
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
        <RouterProvider fallbackElement={<Loading visible />} router={router} />
        <Notifications />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Mantine;
