import { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsInvoice } from './components/DetailsInvoice';
import { HeadingControlsInvoices } from './components/HeadingControlsInvoices';
import { useInvoiceStore } from '../../stores/invoices';
import { InvoiceInterface } from '../../interfaces/invoice.interface';
import { FooterInvoice } from './components/FooterInvoice';

export function Invoice() {
  const [invoice, setInvoice] = useState<InvoiceInterface | undefined>(undefined);
  const invoices = useInvoiceStore((state) => state.invoices);
  const { invoiceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const searchInvoiceById = invoices.find((invoice) => invoice.id === invoiceId);
    setInvoice(searchInvoiceById);
    if (!searchInvoiceById) navigate('/dashboard');
  }, [invoice, invoiceId]);

  return (
    <Container maxW="container.lg">
      <HeadingControlsInvoices invoice_code={invoice?.invoice_code} />
      <DetailsInvoice invoice={invoice} />
      <FooterInvoice />
    </Container>
  );
}
