import { Button } from "@mantine/core";
import { Link, useMatch } from "react-router-dom";

export default function NavLinks() {
  const home = useMatch("/");
  return (
    <Button component={Link} to={home ? "/products" : "/"} variant="subtle" size="lg" compact color="main">
      {home ? "Products" : "Home"}
    </Button>
  );
}
