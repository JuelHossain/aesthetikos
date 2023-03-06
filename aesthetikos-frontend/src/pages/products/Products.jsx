import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import ProductsSidebar from "../../components/sidebar/ProductsSidebar";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";

export default function Products() {
  useSetPageTitle("Products");

  return (
    <Flex className=" gap-4  justify-between p-4 pr-0">
      <div className="hidden md:flex sticky bottom-10">
        <ProductsSidebar />
      </div>
      <Outlet />
    </Flex>
  );
}
