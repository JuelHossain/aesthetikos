import { LoadingOverlay, Notification, Stack, Text, Title } from "@mantine/core";
import { IconExclamationMark } from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { PaymentFormProvider } from "../../../context/paymentContext/paymentFormContext";
import { useUserContext } from "../../../context/userContext";
import useGetAOrder from "../../../hooks/orders/useGetAOrder";
import SellerProducts from "../../ad/SellerProducts";
import PaymentForm from "./PaymentForm";
import PaymentMethods from "./PaymentMethods";

export default function Payments() {
  const { id } = useParams();
  const { user } = useUserContext();
  const { order, orderLoading, orderError } = useGetAOrder(id);
  const { productName, cat, price, productId } = order || {};

  if (orderLoading) return <LoadingOverlay visible />;
  if (orderError) return <Notification title="Server Side Error">Please Try Again later</Notification>;

  return (
    <PaymentFormProvider id={id} productId={productId}>
      <div className="mt-10 sm:mt-20 max-w-screen-xl mx-auto">
        <Stack className="gap-6 container mx-auto">
          <div className="flex flex-col gap-6  rounded-2xl text-main-7">
            <SellerProducts
              id={productId}
              title={
                <div className="w-full items-start mb-6 px-2">
                  <Title order={2}>Hello {user?.displayName}</Title>
                  <Text className="text-2xl">You Are Going To Pay For</Text>
                </div>
              }
            />
            <Notification
              icon={<IconExclamationMark />}
              withCloseButton={false}
              disallowClose
              color="red"
              title="Note"
              className="rounded-2xl shadow-none"
            >
              Please Be Noted That Your Payment Will Go to the seller directly and the payment is non refundable
            </Notification>
          </div>

          <PaymentMethods />
          <PaymentForm price={price} id={productId} />
        </Stack>
      </div>
    </PaymentFormProvider>
  );
}
