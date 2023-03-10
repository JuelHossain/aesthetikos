import { IconDeviceMobileOff } from "@tabler/icons-react";

import ChangeStatus from "../../shared/ChangeStatus";

export default function useProductRows(products) {
  const rows = products?.map((item) => {
    const { _id: id, productName, subCategory, price, imageLinks, status } = item || {};

    const title = `${productName} ${subCategory}`;
    const image = imageLinks?.length > 0 ? imageLinks[0] : <IconDeviceMobileOff size={16} />;
    const cols = [<ChangeStatus size="xs" w={100} key={id} status={status} id={id} />, price];

    return { id, title, image, cols };
  });
  return rows;
}
