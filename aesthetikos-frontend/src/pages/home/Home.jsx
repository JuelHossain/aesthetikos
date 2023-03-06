import ProductSection from "../../components/product-section/ProductSection";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
// import ProductAd from "./ad/ProductAd";

export default function Home() {
  useSetPageTitle("Home");

  return (
    <div className="relative">
      <ProductSection {...{ query: { ad: true }, title: "Featured Products" }} />
    </div>
  );
}
