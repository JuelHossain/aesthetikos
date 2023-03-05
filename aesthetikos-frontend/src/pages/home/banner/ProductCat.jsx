import { Button, SimpleGrid, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import categories from "../../products/components/categories";

export default function ProductCategories() {
  const items = categories.map((item) => (
    <Button
      // leftIcon={<item.icon />}
      variant="outline"
      size="xl"
      radius="lg"
      component={Link}
      to={item.link}
      key={item.label}
      className=""
    >
      <Text className="" mt={7}>
        {item.label}
      </Text>
    </Button>
  ));

  return (
    <div className="p-5 sm:p-10">
      <SimpleGrid cols={2} mt="md">
        {items}
      </SimpleGrid>
    </div>
  );
}
