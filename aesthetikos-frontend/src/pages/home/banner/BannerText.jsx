// all imports

import { Stack, Text, Title } from "@mantine/core";
import Logo from "./Logo";

export default function BannerText() {
  return (
    <Stack className="container mx-auto px-5 justify-center items-center gap-0.5 pt-4">
      <Logo className="w-20 mb-4" path="fill-main-6" />
      <Title color="main">Aesthetikos</Title>
      <Text className="text-2xl tracking-wider text-center" color="sec">
        Swap Something Aesthetic
      </Text>
    </Stack>
  );
}
