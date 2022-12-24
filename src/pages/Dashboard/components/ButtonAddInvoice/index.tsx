import { Text, Box } from '@chakra-ui/react';
import { Container } from './style';
import { Plus } from 'react-feather';

interface ButtonAddInvoiceProps {
  onOpen: () => void;
}

export function ButtonAddInvoice({ onOpen }: ButtonAddInvoiceProps) {
  return (
    <Container onClick={onOpen}>
      <Box p="2" borderRadius="full" bgColor="white">
        <Plus color="#09e331" />
      </Box>
      <Text fontWeight="semibold">New Invoice</Text>
    </Container>
  );
}
