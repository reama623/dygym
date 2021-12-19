import { Box } from "@chakra-ui/react";
import Card from "../../components/card";

const property = {
  // imageUrl: "https://bit.ly/2Z4KKcF",
  // imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "가슴",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

export default function Management() {
  return (
    <Box display="flex" flexWrap="wrap">
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
      <Card property={property} />
    </Box>
  );
}
