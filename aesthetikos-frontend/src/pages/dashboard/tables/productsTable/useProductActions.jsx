import { Text, Title } from "@mantine/core";
import { openConfirmModal, openModal } from "@mantine/modals";
import { IconAd, IconPencil, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { ProductFormProvider } from "../../../../context/phone-context/productFormContext";
import PhoneForm from "../../../../context/phone-context/ProductFormPage";
import { useUserContext } from "../../../../context/userContext";
import useDeleteAProduct from "../../../../hooks/phones/useDeleteAProduct";

export default function useProductActions() {
  const { seller } = useUserContext();
  const { mutate } = useDeleteAProduct();
  const navigate = useNavigate();

  const editProduct = {
    fn: (id, title) =>
      openModal({
        title: (
          <>
            <Title order={4}>Edit {title}</Title>
            <Text>Please check everything Carefully</Text>
          </>
        ),
        classNames: { header: "items-start" },
        radius: "xl",
        size: 800,
        children: (
          <ProductFormProvider id={id}>
            <PhoneForm />
          </ProductFormProvider>
        ),
      }),
    icon: IconPencil,
    props: { color: "green", variant: "light" },
  };
  const deleteProduct = {
    fn: (id, title) =>
      openConfirmModal({
        title: `Do You Really Want To Delete ${title}`,
        children: <Text size="sm">You Cannot Undo This Action Later , Please consider think twice.</Text>,
        labels: { confirm: "Confirm", cancel: "Cancel" },
        onConfirm: () => mutate(id),
      }),
    icon: IconTrash,
    props: { color: "red", variant: "light" },
  };
  const postAd = {
    fn: (id) => navigate(`/ad/${id}`),
    icon: IconAd,
    props: { color: "blue", variant: "light" },
  };

  const actions = [editProduct, deleteProduct];
  if (seller) actions.push(postAd);
  return actions;
}
