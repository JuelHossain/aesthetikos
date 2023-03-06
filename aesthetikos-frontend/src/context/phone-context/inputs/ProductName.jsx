import { TextInput } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function ProductName() {
  const { getInputProps } = useProductFormContext();
  return (
    <TextInput
      label="Product Name"
      placeholder="Product Names"
      {...getInputProps("productName")}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
