// all imports

// import useGetProducts from "../../hooks/phones/useGetProducts";
import { LoadingOverlay, Paper } from "@mantine/core";
import useGetProducts from "../../hooks/phones/useGetProducts";
import SectionTitle from "../sidebar/SectionTitle";
import ProductCard from "./ProductCard";

export default function ProductSection({ query, title, bottom }) {
  const { products, isLoading } = useGetProducts(query);

  const productsElement = products?.map((item) => <ProductCard product={item} key={item._id} />);
  return (
    <div className="relative container mx-auto flex flex-col lg:gap-10">
      <SectionTitle className="text-center lg:mt-20">{title}</SectionTitle>
      <Paper className="flex-1 relative flex flex-col gap-4 pr-4 h-[90vh] ">
        <div className="grid flex-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 p-4 gap-x-4 relative  rounded-2xl  justify-items-stretch gap-y-0">
          {productsElement}
        </div>
        <LoadingOverlay visible={isLoading} />
      </Paper>
      {bottom}
    </div>
  );
}

// function ProductSectionBackgroundLogo() {
//   return (
//     <Logo
//       className="absolute  w-48 xs:w-60 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] xxl:w-[550px] -top-20 xs:-top-24 sm:-top-28 md:-top-32 lg:-top-36 xl:-top-40 xxl:-top-44 right-0 left-0 mx-auto  z-0 opacity-10"
//       path="fill-neu-5"
//     />
//   );
// }
