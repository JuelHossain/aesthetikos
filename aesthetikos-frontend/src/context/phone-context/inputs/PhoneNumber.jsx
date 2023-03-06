import { TextInput } from "@mantine/core";
import { useProductFormContext } from "../productFormContext";

export default function PhoneNumber() {
  const { getInputProps } = useProductFormContext();
  return <TextInput label="Phone Number" placeholder="Your Phone Number Please" {...getInputProps("phoneNumber")} />;
}
