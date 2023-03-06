import { TextInput } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { useProfileContext } from "../profileContext";

export default function Email() {
  const { getInputProps } = useProfileContext();
  return (
    <TextInput
      icon={<IconMail size={16} />}
      description="Your Email Address"
      label="Email"
      // classNames={{
      //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
      //   label: "text-sec-9 font-semibold",
      //   description: "text-sec-5/90 font-normal",
      //   icon: "text-sec-6",
      // }}
      {...getInputProps("email")}
      readOnly
    />
  );
}
