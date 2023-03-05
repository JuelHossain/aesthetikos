import BannerBackground from "./BannerBackground";
import BannerText from "./BannerText";
import ProductCategories from "./ProductCat";

export default function Banner() {
  return (
    <div className="w-full flex flex-col relative bg-main-2/15 py-20  justify-between">
      <BannerText />
      <ProductCategories />
      <BannerBackground />
    </div>
  );
}
