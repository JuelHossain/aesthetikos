import { Button } from "@mantine/core";
import { Link, useMatch } from "react-router-dom";

export default function NavLinks(prop) {
  const home = useMatch("/");

  return (
    <Button
      {...prop}
      component={Link}
      to={home ? "/products" : "/"}
      variant="subtle"
      size="lg"
      compact
      color="main"
      {...prop}
    >
      {home ? "Products" : "Home"}
    </Button>
  );
}
