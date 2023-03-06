import { Select } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function ProductCategory() {
  const { getInputProps, values } = useProductFormContext();
  

  return (
    <Select
      {...getInputProps("category")}
      label="Product Category"
      placeholder="Category of Product"
      data={[
        { value: "rare", label: "Rare" },
        { value: "popular", label: "popular" },
        { value: "classic", label: "Classic" },
        { value: "common", label: "Common" },
      ]}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
