import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { InvoiceInterface } from '../../../../interfaces/invoice.interface';
import { formatCurrency } from '../../../../utils/formatCurrency';

interface DetailsInvoiceProps {
  invoice: InvoiceInterface | undefined;
}

export function DetailsInvoice({ invoice }: DetailsInvoiceProps) {
  return (
    <Box
      bgColor="gray.100"
      paddingX="6"
      paddingY="8"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      gap="10">
      <HStack justify="space-between" flexWrap={{ base: 'wrap', sm: 'nowrap' }}>
        <Box>
          <Text fontSize="lg" mb="3" fontWeight="semibold" color="green.600">
            Bill from
          </Text>
          <Text>{invoice?.from_street_address}</Text>
          <Text>{invoice?.from_city}</Text>
          <Text>{invoice?.from_post_code}</Text>
          <Text>{invoice?.from_country}</Text>
        </Box>

        <Box>
          <Text fontSize="lg" mb="3" fontWeight="semibold" color="green.600">
            Bill to
          </Text>
          <Text>{invoice?.to_street_address}</Text>
          <Text>{invoice?.to_city}</Text>
          <Text>{invoice?.to_street_address}</Text>
          <Text>{invoice?.to_country}</Text>
        </Box>
      </HStack>

      <HStack justify="space-between">
        <VStack alignItems="flex-start">
          <Text>Total</Text>
          <Text fontWeight="semibold">{formatCurrency(invoice?.invoice_price)}</Text>
        </VStack>

        <VStack alignItems="flex-start">
          <Text>Sent to</Text>
          <Text fontWeight="semibold">{invoice?.to_mail}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
