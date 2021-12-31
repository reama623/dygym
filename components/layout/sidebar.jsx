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
import { useRouter } from "next/router";

const LinkItems = [
  { name: "Home", link: "/", icon: FiHome },
  { name: "운동 관리", link: "/management", icon: FiCompass },
  { name: "운동 만들기", link: "/making", icon: FiTrendingUp },
  { name: "운동 달력", link: "/calendar", icon: FiTrendingUp },
  { name: "회원 관리", link: "/user", icon: FiTrendingUp },
  // { name: "Favourites", icon: FiStar, href="" },
  // { name: "Settings", icon: FiSettings, href="" },
];

export default function Sidebar({ onClose, ...rest }) {
  const { pathname } = useRouter();
  const [_, path] = pathname.split("/");
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
        <NavItem
          key={name}
          icon={link.icon}
          link={link}
          hover={link === `/${path}`}
        >
          {name}
        </NavItem>
      ))}
    </Box>
  );
}

const NavItem = ({ icon, link, children, hover, ...rest }) => {
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
        bg={hover && "cyan.400"}
        color={hover && "white"}
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
