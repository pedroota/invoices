import { Box } from '@chakra-ui/react';
import { InvoiceInterface } from '../../../../interfaces/invoice.interface';

interface DetailsInvoiceProps {
  invoice: InvoiceInterface | undefined;
}

export function DetailsInvoice({ invoice }: DetailsInvoiceProps) {
  return (
    <Box bgColor="gray.100" paddingX="6" paddingY="8" borderRadius="md">
      DetailsInvoice
    </Box>
  );
}
