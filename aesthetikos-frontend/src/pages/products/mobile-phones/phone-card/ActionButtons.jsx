import { ActionIcon, Button, Group } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconHeart } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { openBookingModal } from "../../../../components/modals/bookingModal";
import { useModalContext } from "../../../../context/modalContext";
import { useUserContext } from "../../../../context/userContext";
import useUpdateCurrentUser from "../../../../hooks/auth/useUpdateCurrentUser";
import useGetOrders from "../../../../hooks/orders/useGetOrders";

export default function ActionButtons({ product, sellerLoading }) {
  const { createdBy, _id, ad } = product || {};
  const { email, userLoading, seller, admin } = useUserContext();
  const { orders, ordersLoading } = useGetOrders({ email, productId: _id });
  const alreadyBooked = orders?.length > 0;

  const { addToWishList } = useUpdateCurrentUser();
  const { wishlist } = useUserContext();
  const matched = wishlist?.filter((p) => p?._id === _id);
  const wishListed = matched?.length > 0;
  const myPhone = email === createdBy;
  const { authModal } = useModalContext();
  const [, { open }] = authModal || {};
  const navigate = useNavigate();
  const bookingHandler = () => {
    if (email) {
      if (myPhone && seller && !ad) {
        navigate(`/ad/${_id}`);
      } else if (alreadyBooked || myPhone || seller || admin) {
        notifications.show({
          title: alreadyBooked
            ? "Already Booked"
            : myPhone
            ? "Your Phone"
            : seller
            ? "You are a seller"
            : admin
            ? "You are a admin"
            : "Unknown Error",
          message: alreadyBooked
            ? "This Product is Already Booked By You"
            : myPhone
            ? "This is your phone you how can you book this?"
            : seller
            ? "Please change your role from the dashboard"
            : admin
            ? "You Can't book this phone"
            : "Unknown Error",
        });
      } else {
        openBookingModal(_id);
      }
    } else {
      open();
    }
  };
  return (
    <Group noWrap>
      <ActionIcon
        onClick={() => addToWishList(product)}
        radius="md"
        variant={wishListed ? "filled" : "light"}
        color="sec"
      >
        <IconHeart size={16} />
      </ActionIcon>
      <Button
        loading={ordersLoading || userLoading || sellerLoading}
        rightIcon={alreadyBooked && <IconCheck size={18} />}
        size="xs"
        onClick={bookingHandler}
        radius="md"
      >
        {alreadyBooked ? "Booked" : myPhone && seller && !ad ? "Give AD" : myPhone ? "Your Phone" : "Book Now"}
      </Button>
    </Group>
  );
}
