import { Modal, Text } from "@mantine/core";
import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext/authContext";
import { useModalContext } from "../../context/modalContext";
import { useUserContext } from "../../context/userContext";
import AuthPage from "./AuthPage";

export default function AuthModal() {
  const { authModal } = useModalContext();
  const { type, toggleType } = useAuthContext();
  const { user } = useUserContext();

  const [opened, { close }] = authModal;

  // closing the modal when user is logged in
  useEffect(() => {
    if (user) {
      close();
      toggleType("login");
    }
  }, [user, close, toggleType]);

  return (
    <Modal
      title={
        <div className="text-center my-2">
          <h2 className="m-0 text-main-7">Welcome to Aesthetikos,</h2>
          <Text className="text-2xl font-semibold text-main-6">Please {type} </Text>
        </div>
      }
      classNames={{ header: "items-start ", title: "flex-1" }}
      centered
      size={500}
      opened={opened}
      onClose={() => {
        close();
        toggleType("login");
      }}
      radius="xl"
    >
      <AuthPage />
    </Modal>
  );
}
