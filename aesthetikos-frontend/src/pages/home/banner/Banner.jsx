import { useMatch } from "react-router-dom";
import BannerBackground from "./BannerBackground";
import BannerText from "./BannerText";
import ProductCategories from "./ProductCat";

export default function Banner() {
  const match = useMatch("/");
  return (
    match && (
      <div className="w-full flex flex-col relative bg-main-2/15   justify-center overflow-hidden xl:h-[100vh] ">
        <div
          className="max-w-screen-xl mx-auto flex flex-col gap-2 xs:gap-4 sm:gap-6 md:gap8 lg:gap-10 xl:gap-12 xxl:gap-14 
        p-5 xs:p-8 sm:py-12 md:py-16   z-10
        "
        >
          <BannerText />
          <ProductCategories />
        </div>
        <BannerBackground />
      </div>
    )
  );
}
