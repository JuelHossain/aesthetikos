import { Title } from "@mantine/core";
import Loading from "../../components/shared/Loading";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import NotFound from "../dashboard/shared/NotFound";
import ServerError from "../dashboard/shared/ServerError";

export default function SellerProducts({ title, id }) {
  const { product, productLoading, productError } = useGetAProduct(id);
  const { productName, cat, subCategory, price, imageLinks } = product || {};

  if (productError) return <ServerError />;
  if (!product)
    return <NotFound title="You Don't have any products" children=" Please add a product first from  your dashboard" />;

  return (
    <div>
      {title || (
        <Title align="center " order={2} mb={20}>
          You Are Giving Ad For
        </Title>
      )}

      <div className="flex flex-col xs:flex-row bg-main-2 rounded-3xl">
        <div className="p-10 sm:p-20  rounded-2xl flex flex-col gap-2 text-main-8 flex-1">
          <h2 className="m-0">Name: {productName}</h2>
          <h3 className="m-0">Category: {cat}</h3>
          <h3 className="m-0">Sub Category: {subCategory}</h3>
          <h3 className="m-0">Price: {price} $</h3>
        </div>
        <div className="flex-1">
          <img src={imageLinks[0]} alt="product" className="w-full h-full rounded-r-3xl" />
        </div>
      </div>

      <Loading visible={productLoading} />
    </div>
  );
}
