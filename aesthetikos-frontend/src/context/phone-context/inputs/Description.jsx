import { Textarea } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function Description() {
  const { getInputProps } = useProductFormContext();

  return (
    <Textarea label="Description" placeholder="say something about your product" {...getInputProps("description")} />
  );
}
