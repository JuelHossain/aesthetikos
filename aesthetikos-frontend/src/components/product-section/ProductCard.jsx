import { Card, Group } from "@mantine/core";
import useGetAUser from "../../hooks/auth/useGetUser";
import ActionButtons from "../../pages/products/mobile-phones/phone-card/ActionButtons";
import CreatedTime from "../../pages/products/mobile-phones/phone-card/CreatedTime";
import Details from "../../pages/products/mobile-phones/phone-card/Details";
import Price from "../../pages/products/mobile-phones/phone-card/Price";
import Logo from "../shared/Logo";
import ProductPhotos from "./product-card/ProductPhotos";

export default function ProductCard({ product }) {
  const { imageLinks, price, createdBy, createdAt } = product || {};
  const { user: seller, userLoading: sellerLoading } = useGetAUser(createdBy);

  return (
    <Card className="flex-col flex justify-between z-0 bg-sec-0 p-3 gap-2 my-6 rounded-[40px] relative max-w-full ">
      <>
        <ProductPhotos imageLinks={imageLinks} />
        <CreatedTime createdAt={createdAt} />
        <Details {...product} seller={seller} />
      </>

      <Group position="apart" className="mb-2 px-2 z-50">
        <Price price={price} />
        <ActionButtons product={product} sellerLoading={sellerLoading} />
      </Group>

      <Logo className="absolute  w-48 -bottom-10 rotate-[-35deg] -right-10 mx-auto  z-0 opacity-10" path="fill-neu-5" />
    </Card>
  );
}
