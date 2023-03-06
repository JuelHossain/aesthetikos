import { Card, Group, NavLink, Stack, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { useHeaderContext } from "../../context/headerContext";
import UserSection from "../header/user/UserSection";
import SideBarNav from "./SidebarNav";

export default function Sidebar({ navlinks, title, extra, left }) {
  const { disclosure } = useHeaderContext();
  const [, { close }] = disclosure;

  const { pathname } = useLocation();
  const items = navlinks.map((item) => {
    const { label, description, link } = item;

    const active = pathname === link;

    return (
      <NavLink
        className="rounded-[15px]"
        component={Link}
        to={link}
        key={label}
        label={label}
        description={description}
        icon={<item.icon size={16} stroke={1.5} />}
        onClick={close}
        active={active}
      />
    );
  });

  return (
    <Card
      sx={(theme) => ({
        borderLeft: left && theme.colorScheme === "light" && `1px solid ${theme.colors.gray[3]}`,
        borderRight: !left && theme.colorScheme === "light" && `1px solid ${theme.colors.gray[3]}`,
      })}
      className="w-60 p-2  bg-sec-2 rounded-[35px] flex flex-col justify-between"
    >
      <SideBarNav />
      <Stack className="flex-1 gap-0">
        <Group className=" p-4" justify="center">
          <Text className="font-bold text-main-8">{title}</Text>
          {extra}
        </Group>
        <Stack spacing={2}> {items}</Stack>
      </Stack>
      <UserSection />
    </Card>
  );
}
