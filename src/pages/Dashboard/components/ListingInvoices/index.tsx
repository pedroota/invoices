import { Text, VStack } from '@chakra-ui/react';
import { AlertCircle } from 'react-feather';
import { useInvoiceStore } from '../../../../stores/invoices';
import { InvoiceCard } from '../InvoiceCard';
import { Container } from './style';

export function ListingInvoices() {
  const invoices = useInvoiceStore((state) => state.invoices);

  return (
    <Container>
      {!invoices.length ? (
        <VStack marginBlock="12">
          <AlertCircle color="#988f96" size={70} />
          <Text color="gray.500" fontSize="2xl" textAlign="center">
            There is no invoices registered
          </Text>
        </VStack>
      ) : (
        invoices.map(
          ({ invoice_code, invoice_due_date, invoice_price, invoice_status, to_name, id }) => (
            <InvoiceCard
              key={id}
              invoice_code={invoice_code}
              invoice_due_date={invoice_due_date}
              invoice_price={invoice_price}
              invoice_status={invoice_status}
              invoice_to_name={to_name}
              id={id}
            />
          )
        )
      )}
    </Container>
  );
}
