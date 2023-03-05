import { useMatch } from "react-router-dom";
import BannerBackground from "./BannerBackground";
import BannerText from "./BannerText";
import ProductCategories from "./ProductCat";

export default function Banner() {
  const match = useMatch("/");
  return (
    match && (
      <div className="w-full flex flex-col relative bg-main-2/15 py-20  justify-between">
        <BannerText />
        <ProductCategories />
        <BannerBackground />
      </div>
    )
  );
}
