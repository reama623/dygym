import Link from "next/link";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass } from "react-icons/fi";

const LinkItems = [
  { name: "Home", link: "/", icon: FiHome },
  { name: "Management", link: "/management", icon: FiCompass },
  { name: "Making Today", link: "/making", icon: FiTrendingUp },
  // { name: "Favourites", icon: FiStar, href="" },
  // { name: "Settings", icon: FiSettings, href="" },
];

export default function Sidebar({ onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="16" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          DYGYM
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map(({ name, link }) => (
        <NavItem key={name} icon={link.icon} link={link}>
          {name}
        </NavItem>
      ))}
    </Box>
  );
}

const NavItem = ({ icon, link, children, ...rest }) => {
  return (
    <Link href={link}>
      {/* <Link style={{ textDecoration: "none" }}> */}
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
      {/* </Link> */}
    </Link>
  );
};
