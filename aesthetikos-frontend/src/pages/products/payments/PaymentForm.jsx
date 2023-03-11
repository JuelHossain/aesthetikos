import { Button, Group, NumberInput, SimpleGrid, TextInput } from "@mantine/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import { openBookingModal } from "../../../components/modals/bookingModal";
import { usePaymentFormContext } from "../../../context/paymentContext/paymentFormContext";
import { useUserContext } from "../../../context/userContext";

export default function PaymentForm({ id, price, noDetails }) {
  const {
    getInputProps,
    values: { paymentMethod } = {},
    submitting,
    submitHandler,
    stripePromise,
    onSubmit,
  } = usePaymentFormContext();

  const { user: { displayName, email } = {} } = useUserContext();
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form
      onSubmit={onSubmit(async (data) => {
        if (elements == null) {
          return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });

        await submitHandler(data);
      })}
    >
      <Group position="apart">
      {/* <CardElement /> */}
        <p className="text-xl">Go Ahead Do it</p>
        {!noDetails && <Button onClick={() => openBookingModal(id)}>Check The Booking Details</Button>}
      </Group>
      <SimpleGrid cols={2}>
        <NumberInput hideControls {...getInputProps("cardNumber")} label={`Your ${paymentMethod} Number`} />
        <TextInput readOnly value={displayName || ""} label="Your Name" />
        <TextInput readOnly value={email || ""} label="Your Email" />
      </SimpleGrid>
      <Group position="right">
        <p className="text-main-7 font-semibold ">
          Your total amount To Be paid: <span className="text-2xl">{price} $</span> taka{" "}
        </p>
      </Group>
      <Group position="right">
        <Button component={Link} to="/" color="sec" variant="light" type="button">
          Go To Home
        </Button>
        <Button type="submit" loading={submitting}>
          Pay Now
        </Button>
      </Group>
    </form>
  );
}
