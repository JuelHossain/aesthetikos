import { Group } from "@mantine/core";
import AlientIcon from "./AlientIcon";
import LoginLogout from "./LoginLogout";

export default function UserSection({ mobile }) {
  return (
    <Group
      className={`${
        mobile ? "md:hidden px-3 justify-center" : "hidden md:flex"
      } relative  gap-2 duration-300 bg-white w-full p-2 rounded-b-[20px] rounded-t-[15px] mb-1 justify-center`}
    >
      <AlientIcon />
      <LoginLogout />
    </Group>
  );
}
