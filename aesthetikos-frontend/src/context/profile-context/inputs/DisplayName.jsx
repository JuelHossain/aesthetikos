import { TextInput } from "@mantine/core";
import { useProfileContext } from "../profileContext";

export default function DisplayName() {
  const { getInputProps } = useProfileContext();
  return (
    <TextInput
      size="xl"
      variant="default"
      classNames={{ input: "font-bold text-2xl capitalize rounded-xl text-sec-6 border-sec-3 bg-sec-1"}}
      {...getInputProps("displayName")}
    />
  );
}
