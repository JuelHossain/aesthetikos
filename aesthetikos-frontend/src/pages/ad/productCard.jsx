import { Card, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconDeviceMobileVibration } from "@tabler/icons-react";
import { useAdFormContext } from "../../context/adFormContext/adFormContext";

export default function ProductCard({ product }) {
  const { productName, subCategory, _id } = product || {};
  const { setValues, values: { id } = {} } = useAdFormContext();

  const selected = id === _id;
  return (
    <Card
      className="cursor-pointer flex flex-col justify-center items-center"
      onClick={() => setValues({ id: _id })}
      withBorder={selected}
      shadow="sm"
    >
      <Stack position="center" align="center">
        <ThemeIcon variant="light" size="xl">
          <IconDeviceMobileVibration />
        </ThemeIcon>
        <Text align="center" lineClamp={1}>{`${productName} ${subCategory}`}</Text>
      </Stack>
    </Card>
  );
}
