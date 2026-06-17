import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'INICIO', to: '/' },
  { label: 'FIXTURE', to: '/fixture' },
  { label: 'GRUPOS', to: '/grupos' },
  { label: 'MI SELECCIÓN', to: '/mi-seleccion' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <Box bg="white" borderBottom="1px solid" borderColor="gray.200" position="sticky" top={0} zIndex={100}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        align="center"
        h="60px"
        justify="space-between"
      >
        {/* Logo */}
        <Flex align="center" gap={1} cursor="pointer">
          <Text fontSize="20px" lineHeight="1">⭐</Text>
          <Text fontWeight="900" fontSize="18px" letterSpacing="tight" color="gray.900">
            MUNDIAL
          </Text>
          <Text fontWeight="400" fontSize="18px" color="blue.500" letterSpacing="tight">
            .2026
          </Text>
        </Flex>

        {/* Nav tabs */}
        <HStack spacing={0} h="100%">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to);

            return (
              <NavLink key={item.to} to={item.to}>
                <Box
                  px={5}
                  h="60px"
                  display="flex"
                  alignItems="center"
                  fontSize="13px"
                  fontWeight="600"
                  letterSpacing="wider"
                  color={isActive ? 'gray.900' : 'gray.500'}
                  borderBottom="2px solid"
                  borderColor={isActive ? 'gray.900' : 'transparent'}
                  _hover={{ color: 'gray.900' }}
                  transition="all 0.15s"
                >
                  {item.label}
                </Box>
              </NavLink>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
}
