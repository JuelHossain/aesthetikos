/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-unsafe-optional-chaining */

import { closeAllModals } from "@mantine/modals";
import useAddProduct from "../../hooks/phones/useAddProduct";
import useUpdateAProduct from "../../hooks/phones/useUpdateAProduct";
import { useUserContext } from "../userContext";

export default function useFormHandler({ onSubmit, reset }, id) {
  const { email } = useUserContext();
  const { addProduct, addingProduct, addError } = useAddProduct();
  const { updateProduct, updatingProduct, updateError } = useUpdateAProduct();

  const loading = addingProduct || updatingProduct;
  const serverError = addError || updateError;

  const submitHandler = (e) => {
    const handler = (data) => {
      if (data?.exist) {
        const { exist, ...patch } = data;
        updateProduct({ patch, id });
        closeAllModals();
      } else {
        const newPhone = { ...data, createdAt: new Date(), createdBy: email, cat: data?.category, status: "on-air" };

        addProduct(newPhone, {
          onSuccess: () => {
            reset();
          },
        });
      }
    };
    onSubmit(handler)(e);
  };

  return { submitHandler, loading, serverError };
}
