import { hasLength } from "@mantine/form";

const required = (name) => (value) => value === "" ? `${name} is required` : null;

const initialProduct = {
  initialValues: {
    productName: "",
    category: "",
    price: "",
    condition: "",
    subCategory: "",
    imageLinks: [],
    description: "",
    phoneNumber: "",
    location: "",
  },
  validate: {
    productName: required("productName"),
    category: required("category"),
    price: required("price"),
    condition: required("condition"),
    description: required("description"),
    location: required("location"),
    phoneNumber: (value) => (/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value) ? null : "Invalid Phone Number"),
    imageLinks: (value) => (value.length === 0 ? "Images are required" : null),
    subCategory: hasLength({ max: 10 }, "maximum ten character please"),
  },
};
export default initialProduct;
