import { notifications } from "@mantine/notifications";
import ProductSection from "../../components/product-section/ProductSection";
import { useModalContext } from "../../context/modalContext";
import { useUserContext } from "../../context/userContext";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import CallToAction from "./ctas/CallToAction";
import { buyersServices, sellersServices } from "./Services/services";
import ServiceSection from "./Services/ServiceSection";
// import ProductAd from "./ad/ProductAd";

export default function Home() {
  useSetPageTitle("Home");
  const { authModal } = useModalContext();
  const [, { open }] = authModal;
  const { user } = useUserContext();

  return (
    <div className="relative max-w-screen-xl mx-auto max-xs:p-2">
      <ProductSection {...{ query: { ad: true }, title: "Featured Products" }} />
      <CallToAction
        button={{
          text: "Join Now",
          onClick: () => {
            if (user) {
              notifications.show({ title: "You Have Already Joined" });
            } else {
              open();
            }
          },
        }}
      >
        Sell Your Aesthetics Now
      </CallToAction>
      <ProductSection {...{ query: { cat: "rare" }, title: "Rare Piece Of Antics" }} />
      <CallToAction button={{ text: "See Wishlist", to: "/dashboard/wishlist" }}>
        Buy On Prepayment & Get 20% Off
      </CallToAction>
      <ProductSection {...{ query: { cat: "classic" }, title: "You must Need These" }} />
      <CallToAction button={{ text: "Add Product", to: "/dashboard/add-product" }}>
        Get Your Product On The Featured Page
      </CallToAction>
      <ServiceSection data={buyersServices} title="Buyers Will Get" />
      <ServiceSection data={sellersServices} title="Sellers Will Get" />
      <CallToAction
        button={{
          text: "Join Now",
          onClick: () => {
            if (user) {
              notifications.show({ title: "You Have Already Joined" });
            } else {
              open();
            }
          },
        }}
      >
        Did You Forgot To Join Us?
      </CallToAction>
    </div>
  );
}
