import { Button, Group, LoadingOverlay } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

import { useAuthContext } from "../../../context/authContext/authContext";
import { useHeaderContext } from "../../../context/headerContext";
import { useModalContext } from "../../../context/modalContext";
import { useUserContext } from "../../../context/userContext";

export default function DashboardLink(prop) {
  const { user, userLoading } = useUserContext();
  const { loading } = useAuthContext();
  const { disclosure } = useHeaderContext();
  const [, { close: closeMenu }] = disclosure;
  const { authModal } = useModalContext();
  const [, { open }] = authModal;
  const { pathname } = useLocation();
  const inDashboard = pathname.slice("1").startsWith("dashboard");
  return (
    <Group className="relative gap-2">
      <LoadingOverlay loaderProps={{ size: "sm" }} visible={loading || userLoading} />
      {user ? (
        <Button
          component={Link}
          to={inDashboard ? "/products" : "/dashboard"}
          compact
          variant="subtle"
          size="lg"
          {...prop}
        >
          {inDashboard ? "Products" : "Dashboard"}
        </Button>
      ) : (
        <Button
          onClick={() => {
            closeMenu();
            open();
          }}
          compact
          variant="subtle"
          size="lg"
          {...prop}
        >
          Log in
        </Button>
      )}
    </Group>
  );
}
