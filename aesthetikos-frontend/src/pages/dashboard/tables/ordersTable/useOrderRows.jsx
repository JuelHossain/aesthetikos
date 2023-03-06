import { Button } from "@mantine/core";
import { IconDeviceMobileCharging } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { openBookingModal } from "../../../../components/modals/bookingModal";
import { useUserContext } from "../../../../context/userContext";

export default function useOrderRows(orders) {
  const { admin } = useUserContext();
  const navigate = useNavigate();
  const rows = orders?.map((item) => {
    const { _id: id, productName, subCategory, price, paid, productId } = item || {};
    const payment = (
      <Button onClick={() => !paid && !admin && navigate(`/payment/${id}`)} compact variant="light" key={id}>
        {paid ? "paid" : admin ? "Unpaid" : "Pay now"}
      </Button>
    );
    const bookingDetails = (
      <Button onClick={() => openBookingModal(productId)} variant="outline" compact>
        Check Booking
      </Button>
    );
    return {
      id,
      title: `${productName} ${subCategory}`,
      image: <IconDeviceMobileCharging size={16} />,
      cols: [bookingDetails, payment, price],
    };
  });
  return rows;
}
