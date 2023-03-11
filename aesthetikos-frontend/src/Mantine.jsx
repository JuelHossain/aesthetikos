import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/shared/Loading";
import useAxiosSetup from "./hooks/auth/useAxiosSetup";
import useRouter from "./router";
import { lightColors } from "./utils/colors";

function Mantine() {
  const customTheme = {
    primaryColor: "main",
    colors: lightColors,
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

  useAxiosSetup();
  const router = useRouter();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      <RouterProvider fallbackElement={<Loading visible />} router={router} />
      <Notifications />
    </MantineProvider>
  );
}

export default Mantine;
