import { Select } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function Condition() {
  const { getInputProps } = useProductFormContext();
  return (
    <Select
      {...getInputProps("condition")}
      label="Product Condition"
      placeholder="Tell us about it"
      data={[
        { value: "fair", label: "Fair" },
        { value: "good", label: "Good" },
        { value: "excellent", label: "Excellent" },
      ]}
      className="flex-grow flex-shrink-0 basis-32"
    />
  );
}
