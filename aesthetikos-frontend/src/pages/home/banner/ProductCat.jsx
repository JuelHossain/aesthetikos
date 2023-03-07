import { Text } from "@mantine/core";
import { Link } from "react-router-dom";
import categories from "../../products/components/categories";

export default function ProductCategories() {
  const items = categories.map((item) => (
    <Link
      to={item.link}
      key={item.label}
      className="no-underline text-main-6 text-lg xs:text-xl sm:text-2xl md:-text-3xl  font-bold ring-2 md:ring-4 p-2 xs:p-4 md:p-6 
      flex justify-center items-center rounded-2xl ring-main-5 hover:bg-main-2 duration-200 z-50"
    >
      <Text className="" mt={7}>
        {item.label}
      </Text>
    </Link>
  ));

  return <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8  p-2 sm:grid-cols-4">{items}</div>;
}
