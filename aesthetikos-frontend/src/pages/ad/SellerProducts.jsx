import { LoadingOverlay, Title } from "@mantine/core";
import { useAdFormContext } from "../../context/adFormContext/adFormContext";
import { useUserContext } from "../../context/userContext";
import useGetAProduct from "../../hooks/phones/useGetAProduct";
import NotFound from "../dashboard/shared/NotFound";
import ServerError from "../dashboard/shared/ServerError";

export default function SellerProducts() {
  const { email } = useUserContext();
  const { values: { id } = {} } = useAdFormContext();
  const { product, productLoading, productError } = useGetAProduct(id);
  const { productName, cat, subCategory, imageLinks } = product || {};
  console.log(product);

  if (productError) return <ServerError />;
  if (!product)
    return <NotFound title="You Don't have any products" children=" Please add a product first from  your dashboard" />;

  // const productsElement = products?.map((product) => <ProductCard product={product} key={product._id} />);

  return (
    <div>
      <Title align="center " order={2} mb={20}>
        You Are Giving Ad For
      </Title>
      <div className="flex flex-col xs:flex-row bg-main-2 rounded-3xl">
        <div className="p-10 sm:p-20  rounded-2xl flex flex-col gap-2 text-main-8 flex-1">
          <h2 className="m-0">Name: {productName}</h2>
          <h3 className="m-0">Category: {cat}</h3>
          <h3 className="m-0">Sub Category: {subCategory}</h3>
        </div>
        <div className="flex-1">
          <img src={imageLinks[0]} alt="product" className="w-full h-full rounded-r-3xl" />
        </div>
      </div>

      <LoadingOverlay visible={productLoading} />
      {/* <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {productsElement}
      </SimpleGrid> */}
    </div>
  );
}
