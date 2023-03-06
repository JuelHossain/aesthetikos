import { NumberInput } from "@mantine/core";
import { IconMedal } from "@tabler/icons-react";
import { useProductFormContext } from "../productFormContext";

export default function Price() {
  const { getInputProps } = useProductFormContext();

  return (
    <NumberInput
      min={0}
      label="Price"
      placeholder="Product Price"
      {...getInputProps("price")}
      icon={<IconMedal size={18} />}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
