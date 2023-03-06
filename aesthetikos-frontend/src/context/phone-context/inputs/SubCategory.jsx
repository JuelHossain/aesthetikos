import { TextInput } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function SubCategory() {
  const { getInputProps } = useProductFormContext();
  return (
    <TextInput
      label="Sub Category"
      placeholder="Specify your product"
      {...getInputProps("subCategory")}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
