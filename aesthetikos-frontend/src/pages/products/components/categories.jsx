import { IconAnkh, IconBadges, IconComet, IconScribble } from "@tabler/icons-react";

const categories = [
  { label: "Rare", icon: IconBadges, description: "Rare to find", link: "/products", cat: "rare" },
  {
    label: "Popular",
    icon: IconAnkh,
    description: "everyone Wants Them",
    link: "/products/popular",
    cat: "popular",
  },
  {
    label: "Classic",
    icon: IconScribble,
    description: "Old But Gold",
    link: "/products/classic",
    cat: "classic",
  },
  {
    label: "Common",
    icon: IconComet,
    description: "Not So Spicy",
    link: "/products/common",
    cat: "common",
  },
];
export default categories;
