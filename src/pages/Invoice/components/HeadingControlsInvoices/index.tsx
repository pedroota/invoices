import { ButtonGroup, Text, Flex, useToast } from '@chakra-ui/react';
import { Button } from '../../../../components/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useInvoiceStore } from '../../../../stores/invoices';

interface HeadingControlsInvoicesProps {
  invoice_code?: string;
}

export function HeadingControlsInvoices({ invoice_code }: HeadingControlsInvoicesProps) {
  const deleteInvoiceById = useInvoiceStore((state) => state.deleteById);
  const changeInvoiceStatusById = useInvoiceStore((state) => state.changeStatus);
  const { invoiceId } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const deleteInvoice = () => {
    deleteInvoiceById(invoiceId);
    toast({
      position: 'top-left',
      title: 'Invoice deleted.',
      description: 'Your invoice has been deleted.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    navigate('/dashboard');
  };

  const changeStatus = () => {
    changeInvoiceStatusById('Paid', invoiceId);
    toast({
      position: 'top-left',
      title: 'Status changed successfully.',
      description: "Your invoice status has successfully changed it's status.",
      status: 'success',
      duration: 1500,
      isClosable: true
    });
  };

  return (
    <Flex
      alignItems="center"
      justify="space-between"
      bgColor="gray.100"
      paddingX="6"
      paddingY="6"
      borderRadius="md"
      marginY="12">
      <Text fontSize="3xl" fontWeight="semibold" display="inline">
        {invoice_code}
      </Text>
      <ButtonGroup>
        <Button variant="warning" onClick={deleteInvoice}>
          Delete
        </Button>
        <Button variant="sucess" onClick={changeStatus}>
          Mark as paid
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
