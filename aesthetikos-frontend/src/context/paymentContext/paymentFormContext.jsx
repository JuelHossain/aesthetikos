import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createContext, useContext } from "react";
import usePaymentForm from "./usePaymentForm";

export const paymentFormContext = createContext();
export function PaymentFormProvider({ ad, productId, id, children }) {
  const value = usePaymentForm(id, productId, ad);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

  return (
    <Elements stripe={stripePromise}>
      <paymentFormContext.Provider value={value}>{children}</paymentFormContext.Provider>;
    </Elements>
  );
}
export const usePaymentFormContext = () => useContext(paymentFormContext);
