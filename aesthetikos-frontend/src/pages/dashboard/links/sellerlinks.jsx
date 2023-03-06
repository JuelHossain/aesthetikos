import { IconAd, IconBuildingSkyscraper, IconSelect } from "@tabler/icons-react";

import AddProduct from "../seller/AddAProductPage";
import ManageAds from "../seller/ManageAds";
import MyProducts from "../seller/MyProducts";

const sellerLinks = [
  {
    label: "Add Product",
    link: "/dashboard/add-product",
    description: "Sell Your Product",
    icon: IconSelect,
    element: <AddProduct />,
  },
  {
    label: "My Products",
    link: "/dashboard/my-products",
    description: "Manage Your Products",
    icon: IconBuildingSkyscraper,
    element: <MyProducts />,
  },
  {
    label: "Manage Ads",
    link: "/dashboard/manage-ads",
    description: "Manage your ads",
    icon: IconAd,
    element: <ManageAds />,
  },
];

export default sellerLinks;
