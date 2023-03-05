import { Input } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";
import { useProfileContext } from "../profileContext";

export default function PhoneNumber() {
  const id = useId();
  const { getInputProps, errors: { phoneNumber } = {} } = useProfileContext();
  return (
    <Input.Wrapper error={phoneNumber} id={id} label="PhoneNumber" description="Your Phone Number">
      <Input
        component={IMaskInput}
        mask="+88 00000-00-0000"
        id={id}
        placeholder="Your phone Number"
        {...getInputProps("phoneNumber")}
        variant="filled"
      />
    </Input.Wrapper>
  );
}
