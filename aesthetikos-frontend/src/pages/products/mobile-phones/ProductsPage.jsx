import { LoadingOverlay, ScrollArea } from "@mantine/core";
import ProductCard from "../../../components/product-section/ProductCard";
import useGetProducts from "../../../hooks/phones/useGetProducts";
import ServerError from "../../dashboard/shared/ServerError";

export default function ProductsPage({ cat }) {
  const { products, productsLoading, productsError } = useGetProducts({ cat });
  const productsElement = products?.map((item) => <ProductCard product={item} key={item?._id} />);
  if (productsError) return <ServerError />;
  return (
    <ScrollArea className="flex-1 overflow-auto">
      <div className=" flex-1 relative flex flex-col gap-4 pr-4 h-[97vh] ">
        <div className=" bg-sec-1 rounded-3xl  p-4 sm:p-8 ">
          <div>
            <h2 className="text-main-9 tracking-wide max-w-xl text-3xl">
              Buy With Online payment and Get <span className=" text-5xl text-sec-6">20% Discount</span>
            </h2>
          </div>
        </div>
        <div className="grid flex-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 p-4 gap-x-4 relative bg-sec-1 rounded-2xl  justify-items-stretch gap-y-0">
          {productsElement}
        </div>
        <LoadingOverlay visible={productsLoading} />
      </div>
    </ScrollArea>
  );
}
