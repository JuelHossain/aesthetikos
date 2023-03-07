import { Group, LoadingOverlay, Paper } from "@mantine/core";
import ProductName from "./inputs/ProductName";

import Logo from "../../components/shared/Logo";
import Condition from "./inputs/Condition";
import Description from "./inputs/Description";
import Heading from "./inputs/Heading";
import Images from "./inputs/Images";
import Location from "./inputs/Location";
import PhoneNumber from "./inputs/PhoneNumber";
import Price from "./inputs/Price";
import ProductCategory from "./inputs/ProductCategory";
import SubCategory from "./inputs/SubCategory";
import SubmitButton from "./inputs/SubmitButton";
import { useProductFormContext } from "./productFormContext";

export default function ProductFormPage() {
  const { submitHandler, values: { exist } = {}, isLoading, id } = useProductFormContext();

  const heading = exist
    ? { title: "Update Product", text: "Please Update Your Product" }
    : { title: "Add A Product", text: "Please Add Your Product" };

  return (
    <Paper
      onSubmit={submitHandler}
      component="form"
      radius="xl"
      className={`bg-white max-w-3xl flex flex-col justify-center gap-4 w-full flex-1 relative overflow-hidden  ${
        !exist ? "p-6" : "pt-2"
      }`}
    >
      <LoadingOverlay visible={id && isLoading} />
      <div className="flex flex-col gap-4 z-10 overflow-auto">
        {!exist && <Heading {...heading} />}
        <Group>
          <ProductName />
          <ProductCategory />
        </Group>
        <Group>
          <Price />
          <Condition />
        </Group>
        <Group>
          <SubCategory />
        </Group>

        <Images />
        <Description />
        <PhoneNumber />
        <Location />
        <SubmitButton />
      </div>
      <Logo className="opacity-5 max-w-lg absolute -bottom-10 rotate-[-35deg] z-0 right-0 " path="fill-neu-5" />
    </Paper>
  );
}
