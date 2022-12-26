import { Box, HStack, Text } from '@chakra-ui/react';
import { Button } from '../../../../components/Button';

export function FooterInvoice() {
  return (
    <HStack maxW={{ base: 'auto', sm: '2xs' }} marginY="5">
      <Button variant="sucess">Download as PDF</Button>
    </HStack>
  );
}
