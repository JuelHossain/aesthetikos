import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/sidebar/DashboardSidebar";
import { ProductFormProvider } from "../../context/phone-context/productFormContext";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";

export default function Dashboard() {
  useSetPageTitle("Dashboard");
  // this is the dashboard where everyone cry. and now its my turn.
  return (
    <ProductFormProvider>
      <Flex className=" gap-4  justify-between p-4 md:h-[97vh]  relative">
        <Outlet />
        <div className="hidden md:flex">
          <DashboardSidebar />
        </div>
      </Flex>
    </ProductFormProvider>
  );
}
