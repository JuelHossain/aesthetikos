/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { useForm } from "@mantine/form";
import initialPaymentForm from "./initialPayemntForm";
import usePaymentHandler from "./usePaymentHandler";

export default function usePaymentForm(id, productId, ad) {
  const form = useForm(initialPaymentForm);

  const handlers = usePaymentHandler(id, productId, ad);

  const paymentMethods = ["Debit Card", "Credit Card", "Bkash", "Nagad", "Rocket", "Upay"];

  return { ...form, ...handlers, paymentMethods };
}
