// all imports
import { Group } from "@mantine/core";
import NavLinks from "../header/nav/NavLinks";
import DashboardLink from "../header/user/DashboardLink";
import Logo from "../shared/Logo";

export default function SideBarNav({ extra }) {
  return (
    <Group
      spacing={0}
      className={`justify-center w-full items-center bg-white rounded-t-[20px] rounded-b-[15px] mt-1 p-2 gap-2 ${extra}`}
      noWrap
    >
      <NavLinks size="md" />
      <Logo className="w-8 fill-main-6" />
      <DashboardLink size="md" />
    </Group>
  );
}
