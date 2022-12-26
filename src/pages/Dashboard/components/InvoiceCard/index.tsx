import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { ChevronRight } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { StatusCard } from './components/StatusCard';

interface IInvoiceCardProps {
  invoice_code: string;
  invoice_due_date: string;
  invoice_to_name: string;
  invoice_price: number;
  invoice_status: string;
  id: string;
}

export function InvoiceCard({
  invoice_code,
  invoice_due_date,
  invoice_to_name,
  invoice_price,
  invoice_status,
  id
}: IInvoiceCardProps) {
  const navigate = useNavigate();

  const navigateToSinglePageInvoice = (id: string) => {
    navigate(`invoices/${id}`);
  };

  return (
    <Flex
      onClick={() => navigateToSinglePageInvoice(id)}
      bgColor="whitesmoke"
      paddingX="10"
      paddingInline={{ base: '4', sm: '10' }}
      paddingBlock={{ base: '3', sm: '6' }}
      borderRadius="md"
      justify="space-between"
      flexWrap={{ sm: 'wrap', md: 'nowrap' }}
      gap="4"
      alignItems="center">
      <HStack w={{ base: '100%', md: '30%' }} justify="space-between">
        <Text fontWeight="semibold">{invoice_code}</Text>
        <Text color="gray.500">{invoice_to_name}</Text>
      </HStack>

      <HStack w={{ base: '100%', md: '50%' }} justify="space-between">
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing="0"
          alignItems="center"
          gap={{ base: '0', sm: '10' }}>
          <Text color="gray.500">{invoice_due_date}</Text>
          <Text fontWeight="bold" fontSize="xl">
            {formatCurrency(invoice_price)}
          </Text>
        </Stack>
        <StatusCard variant={invoice_status}>{invoice_status}</StatusCard>
      </HStack>

      <Box display={{ base: 'none', md: 'inline' }} cursor="pointer">
        <ChevronRight />
      </Box>
    </Flex>
  );
}
