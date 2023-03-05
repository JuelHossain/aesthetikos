import { ActionIcon } from "@mantine/core";

import { IconLogout } from "@tabler/icons-react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../../../context/tokenContext";
import { useUserContext } from "../../../context/userContext";
import auth from "../../../firebase";
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
    <ActionIcon
      color="main"
      size="md"
      radius="xl"
      // className="w-8 h-8"
      variant="filled"
    >
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.81 72.45">
        <g className="cls-1">
          <path
            className="cls-2"
            d="M1018.17,1729.73a27.08,27.08,0,0,1-7-7.35,33.48,33.48,0,0,1-4.18-8.86,37.28,37.28,0,0,1-1.53-10.57,34.36,34.36,0,0,1,4.07-16.83,29.92,29.92,0,0,1,11.24-11.58,31.38,31.38,0,0,1,16-4.24,30.82,30.82,0,0,1,16.21,4.24,30.21,30.21,0,0,1,11.19,11.58,34.22,34.22,0,0,1,4.06,16.83,36.06,36.06,0,0,1-1.47,10.4,30.5,30.5,0,0,1-4.23,8.86,27.07,27.07,0,0,1-6.89,7.46,40.18,40.18,0,0,1-9.61,4.8,5.71,5.71,0,0,1-7.79-3.39,5.5,5.5,0,0,1,.22-4.23,7.21,7.21,0,0,1,4-3.22,23.88,23.88,0,0,0,6.15-2.94,18.94,18.94,0,0,0,4.52-4.75,20.22,20.22,0,0,0,2.71-5.87,27.36,27.36,0,0,0,1-7.06,22.58,22.58,0,0,0-2.6-11,19.13,19.13,0,0,0-7.11-7.57,21.5,21.5,0,0,0-20.9,0,19,19,0,0,0-7.06,7.57,24,24,0,0,0-2.55,11,25.48,25.48,0,0,0,1,7.12,21.27,21.27,0,0,0,2.72,6,17.57,17.57,0,0,0,6.44,5.82,26.53,26.53,0,0,0,4.18,1.75,6.65,6.65,0,0,1,4,3.22,5.3,5.3,0,0,1,.22,4.24,6,6,0,0,1-2.82,3.28,6.31,6.31,0,0,1-5.09.11A44.59,44.59,0,0,1,1018.17,1729.73Z"
            transform="translate(-1005.46 -1662.56)"
          />
          <path
            className="cls-2"
            d="M1037,1674a13.91,13.91,0,0,1-10.85-5.59,3.68,3.68,0,1,1,6-4.29,6.44,6.44,0,0,0,5,2.54,6.37,6.37,0,0,0,4.74-2.54,3.7,3.7,0,0,1,5.14-.85,3.63,3.63,0,0,1,.85,5.14h0a13.77,13.77,0,0,1-10.56,5.59Z"
            transform="translate(-1005.46 -1662.56)"
          />
          <circle className="cls-2" cx="39.15" cy="45.99" r="1.47" />
          <path
            className="cls-2"
            d="M1044.61,1713.35a4.86,4.86,0,1,1,4.85-4.86h0A4.82,4.82,0,0,1,1044.61,1713.35Zm0-6.73a1.93,1.93,0,1,0,1.92,1.92h0a1.91,1.91,0,0,0-1.92-1.92Z"
            transform="translate(-1005.46 -1662.56)"
          />
          <circle className="cls-2" cx="39.15" cy="45.99" r="2.43" />
          <circle className="cls-2" cx="23.84" cy="45.99" r="1.47" />
          <path
            className="cls-2"
            d="M1029.3,1713.35a4.86,4.86,0,1,1,4.86-4.86h0A4.9,4.9,0,0,1,1029.3,1713.35Zm0-6.73a1.93,1.93,0,1,0,1.92,1.92h0a2,2,0,0,0-1.92-1.92Z"
            transform="translate(-1005.46 -1662.56)"
          />
          <circle className="cls-2" cx="23.84" cy="45.99" r="2.43" />
        </g>
      </svg>
    </ActionIcon>
  );
}
