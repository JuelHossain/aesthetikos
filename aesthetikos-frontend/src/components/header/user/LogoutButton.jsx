import { ActionIcon } from "@mantine/core";

import { IconLogout } from "@tabler/icons-react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../../../context/tokenContext";
import { useUserContext } from "../../../context/userContext";
import auth from "../../../firebase";
import AlientIcon from "./AlientIcon";
import "./module.logoutButton.css";

export default function LogoutButton() {
  const { removeToken } = useTokenContext();
  const navigate = useNavigate();
  const { user } = useUserContext();
  return user ? (
    <ActionIcon
      color="main"
      size="md"
      radius="xl"
      // className="w-8 h-8"
      variant="filled"
      onClick={() => {
        signOut(auth);
        removeToken();
        navigate("/");
      }}
    >
      <IconLogout size={18} />
    </ActionIcon>
  ) : (
    <AlientIcon />
  );
}
