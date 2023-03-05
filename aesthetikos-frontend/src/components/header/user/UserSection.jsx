import { Group } from "@mantine/core";
import LoginLogout from "./LoginLogout";

export default function UserSection({ mobile }) {
  return (
    <Group
      className={`${
        mobile ? "md:hidden px-3 justify-center" : "hidden md:flex"
      } relative  gap-2 duration-300 basis-1/3 justify-end`}
    >
      <LoginLogout />
    </Group>
  );
}
