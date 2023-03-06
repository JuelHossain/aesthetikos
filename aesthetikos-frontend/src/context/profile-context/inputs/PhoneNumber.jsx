import { Input } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IconPhone } from "@tabler/icons-react";
import { IMaskInput } from "react-imask";
import { useProfileContext } from "../profileContext";

export default function PhoneNumber() {
  const id = useId();
  const { getInputProps, errors: { phoneNumber } = {} } = useProfileContext();
  return (
    <Input.Wrapper
      // classNames={{ label: "text-sec-9 font-semibold", description: "text-sec-5/90 font-normal", icon: "text-sec-6" }}
      error={phoneNumber}
      id={id}
      label="PhoneNumber"
      description="Your Phone Number"
      left={<IconPhone />}
    >
      <Input
        icon={<IconPhone size={16} />}
        component={IMaskInput}
        // mask={phoneNumber ? "+88 000 00 000000" : false}
        id={id}
        placeholder="Your phone Number"
        {...getInputProps("phoneNumber")}
        // classNames={{
        //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
        // }}
      />
    </Input.Wrapper>
  );
}
