import { Stack, Text, Title } from "@mantine/core";
import Logo from "./banner/Logo";
import ProductCategories from "./banner/ProductCat";
import SmallLogos from "./banner/SmallLogos";
import Wave from "./banner/Wave";

export default function Banner() {
  return (
    <div className="w-full flex flex-col relative bg-main-2/15 py-20  justify-between">
      <Stack className="container mx-auto px-5 justify-center items-center gap-0.5">
        <Logo className="w-20 mb-4" path="fill-main-6" />
        <Title color="main">Aesthetikos</Title>
        <Text className="text-2xl tracking-wider text-center" color="sec">
          Swap Something Aesthetic
        </Text>
      </Stack>
      <ProductCategories />
      <SmallLogos />
      <Logo className="absolute -rotate-[35deg] w-60 bottom-0 right-0 z-0 opacity-10" path="fill-neu-5" />
      <Wave pathProp={{ className: "fill-sec-5/20" }} className="absolute bottom-0 z-10 w-full" />
    </div>
  );
}
