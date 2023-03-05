import { ActionIcon, Avatar, HoverCard } from "@mantine/core";

import { IconUser } from "@tabler/icons-react";
import { useUserContext } from "../../../context/userContext";
import UserPreview from "./UserPreview";

export default function UserButton() {
  const { user } = useUserContext();

  return (
    <HoverCard>
      <HoverCard.Target>
        {user?.photoURL ? (
          <Avatar variant="outline" color="dark" className="w-8 h-8 rounded-full" src={user.photoURL} />
        ) : (
          <ActionIcon size="md" variant="filled" radius="xl">
            <IconUser />
          </ActionIcon>
        )}
      </HoverCard.Target>
      <HoverCard.Dropdown className="p-0">
        <UserPreview />
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
