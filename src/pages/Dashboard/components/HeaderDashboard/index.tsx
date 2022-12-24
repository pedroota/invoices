import { Box, Avatar, Flex, Text } from '@chakra-ui/react';

export function HeaderDashboard() {
  return (
    <Box
      w="100%"
      boxShadow="base"
      paddingY="3"
      paddingX="3"
      display="flex"
      justifyContent="flex-end"
      alignContent="center">
      <Flex alignItems="center" gap="2">
        <Text as="p" fontSize="sm">
          Erick Oliveira
        </Text>
        <Avatar size="sm" name="Erick Oliveira" bgColor="green.400" />
      </Flex>
    </Box>
  );
}
