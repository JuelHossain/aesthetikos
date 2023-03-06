import { Text } from "@mantine/core";

export default function Price({ price }) {
  return (
    <div className="line-clamp-1 space-x-1">
      <Text span size="xl" color="dimmed"weight={500}>
        {price || "999"}
      </Text>
      <Text span size="xl" color="dimmed">
        $
      </Text>
    </div>
  );
}
