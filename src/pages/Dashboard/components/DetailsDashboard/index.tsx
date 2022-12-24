import { HStack, VStack, Text, Flex } from '@chakra-ui/react';
import { useInvoiceStore } from '../../../../stores/invoices';
import { ButtonAddInvoice } from '../ButtonAddInvoice';

interface DetailsDashboardProps {
  onOpen: () => void;
}

export function DetailsDashboard({ onOpen }: DetailsDashboardProps) {
  const invoices = useInvoiceStore((state) => state.invoices);

  return (
    <Flex
      flexWrap="wrap"
      justifyContent={{ base: 'flex-start', sm: 'space-between' }}
      gap={2}
      marginBlock="8">
      <VStack align="flex-start" spacing={0}>
        <Text fontSize="4xl" fontWeight="semibold">
          Invoices
        </Text>
        <Text color="gray.500">There are {invoices.length} invoices in total</Text>
      </VStack>

      <HStack w={{ base: '100%', sm: 'auto' }}>
        <ButtonAddInvoice onOpen={onOpen} />
      </HStack>
    </Flex>
  );
}
