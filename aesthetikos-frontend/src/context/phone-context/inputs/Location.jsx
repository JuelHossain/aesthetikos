import { TextInput } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function Location() {
  const { getInputProps } = useProductFormContext();
  return <TextInput label="Location" placeholder="Location Please" {...getInputProps("location")} />;
}
