import { Chip, Group, Stack, Text } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { useUserContext } from "../../../../context/userContext";

export default function Details({ seller, condition, productName, description }) {
  const { user } = useUserContext();
  return (
    <Stack className="gap-2 p-1 text-neu-9">
      <Group className="justify-between w-full " noWrap>
        <Chip
          size="xs"
          radius={10}
          variant="filled"
          color="sec"
          checked={seller?.verified || user?.verified}
          readOnly
          right
        >
          <p className="m-0 text-main-9 sm:inline">Selling By {seller?.displayName || user?.displayName} </p>
        </Chip>
        <Group spacing={5} className="2/5" noWrap>
          <IconStar size={14} />
          <Text size="xs" weight={500} className="text- main-9 capitalize">
            {condition || "Condition"}
          </Text>
        </Group>
      </Group>
      <div>
        <Text weight={500} className="line-clamp-2 ">
          {`${productName || "Product Name"} ${""}`}
        </Text>
        <Text size="sm" color="dimmed" className="line-clamp-3">
          {description || "Description of your products goes here"}
        </Text>
      </div>
    </Stack>
  );
}
