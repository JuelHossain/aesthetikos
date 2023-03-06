import { Box, Input, SimpleGrid, Text } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useProfileContext } from "../profileContext";

export default function Address() {
  const { getInputProps, errors } = useProfileContext();
  return (
    <Box className="w-full">
      <Text className="  font-semibold text-sm"> Address</Text>
      <SimpleGrid className="xs:grid-cols-2">
        <Input.Wrapper
          // classNames={{
          //   label: "text-sec-9 font-semibold",
          //   description: "text-sec-5/90 font-normal",
          //   icon: "text-sec-6",
          // }}
          description="Holding"
          error={errors["address.holding"]}
        >
          <Input
            // classNames={{
            //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
            // }}
            variant="default"
            {...getInputProps("address.holding")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          // classNames={{
          //   label: "text-sec-9 font-semibold",
          //   description: "text-sec-5/90 font-normal",
          //   icon: "text-sec-6",
          // }}
          description="Road Number"
          error={errors["address.road"]}
        >
          <Input
            // classNames={{
            //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
            // }}
            variant="default"
            {...getInputProps("address.road")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          // classNames={{
          //   label: "text-sec-9 font-semibold",
          //   description: "text-sec-5/90 font-normal",
          //   icon: "text-sec-6",
          // }}
          description="Area"
          error={errors["address.area"]}
        >
          <Input
            // classNames={{
            //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
            // }}
            variant="default"
            {...getInputProps("address.area")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          // classNames={{
          //   label: "text-sec-9 font-semibold",
          //   description: "text-sec-5/90 font-normal",
          //   icon: "text-sec-6",
          // }}
          description="District"
          error={errors["address.district"]}
        >
          <Input
            // classNames={{
            //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
            // }}
            variant="default"
            {...getInputProps("address.district")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          // classNames={{
          //   label: "text-sec-9 font-semibold",
          //   description: "text-sec-5/90 font-normal",
          //   icon: "text-sec-6",
          // }}
          description="Postal Code"
          error={errors["address.postal"]}
        >
          <Input
            // classNames={{
            //   input: "font-semibold rounded-xl text-sec-6 border-sec-3 bg-sec-1",
            // }}
            component={IMaskInput}
            mask="0000"
            variant="default"
            {...getInputProps("address.postal")}
          />
        </Input.Wrapper>
      </SimpleGrid>
    </Box>
  );
}
