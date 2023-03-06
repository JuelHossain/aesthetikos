import ProductCard from "../../../components/product-section/ProductCard";
import { useProductFormContext } from "../../../context/phone-context/productFormContext";
import ProductFormPage from "../../../context/phone-context/ProductFormPage";
import Wrapper from "../shared/Wrapper";

export default function AddAProductPage() {
  const { values } = useProductFormContext();
  return (
    <Wrapper content={<ProductCard product={values} />}>
      <ProductFormPage />
    </Wrapper>
  );
}
