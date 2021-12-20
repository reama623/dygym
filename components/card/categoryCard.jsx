import { Box } from "@chakra-ui/react";

export default function CategoryCard({ item, handleClick }) {
  const { name, count } = item;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.300"
      m={2}
      w={["3xs"]}
      onClick={(e) => handleClick(e, item)}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {count} 개
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
