import { Box } from "@mantine/core";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
// import ProductAd from "./ad/ProductAd";
import Advertisement from "./Advertisement";
import Services from "./Services";

export default function Home() {
  useSetPageTitle("Home");

  return (
    <Box className="">
      {/* <ProductAd /> */}
      <Advertisement />
      <Services />
    </Box>
  );
}
