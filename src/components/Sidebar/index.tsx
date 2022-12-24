import {
  Box,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  Textarea
} from '@chakra-ui/react';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { useInvoiceStore } from '../../stores/invoices';
import { InvoiceInterface } from '../../interfaces/invoice.interface';
import { v4 as uuid } from 'uuid';
import { generateInvoiceCode } from '../../utils/generateinvoiceCode';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { register, handleSubmit } = useForm<InvoiceInterface>();
  const addInvoice = useInvoiceStore((state) => state.addInvoice);

  const createNewInvoice = (invoice: InvoiceInterface) => {
    let newInvoice: InvoiceInterface = {
      ...invoice,
      id: uuid(),
      invoice_code: generateInvoiceCode(),
      invoice_status: 'Pending'
    };
    onClose();
    addInvoice(newInvoice);
  };

  return (
    <Drawer isOpen={isOpen} placement="left" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Create a new Invoice</DrawerHeader>
        <DrawerBody>
          <form id="new-invoice-form" onSubmit={handleSubmit(createNewInvoice)}>
            <Text color="green.500" fontWeight="semibold" marginY={3}>
              Bill from
            </Text>
            <FormLabel>Street Adress</FormLabel>
            <Input isRequired type="text" {...register('from_street_address')} />
            <HStack marginY={3}>
              <Box>
                <FormLabel>City</FormLabel>
                <Input isRequired type="text" {...register('from_city')} />
              </Box>
              <Box>
                <FormLabel>Post Code</FormLabel>
                <Input isRequired type="text" {...register('from_post_code')} />
              </Box>
              <Box>
                <FormLabel>Country</FormLabel>
                <Input isRequired type="text" {...register('from_country')} />
              </Box>
            </HStack>
            <Text color="green.500" fontWeight="semibold" marginY={3}>
              Bill to
            </Text>
            <FormLabel>Client's Name</FormLabel>
            <Input isRequired type="text" {...register('to_name')} />
            <FormLabel>Client's Email</FormLabel>
            <Input isRequired type="text" {...register('to_mail')} />
            <FormLabel>Street Adress</FormLabel>
            <Input isRequired type="text" {...register('to_street_address')} />
            <HStack marginY={3}>
              <Box>
                <FormLabel>City</FormLabel>
                <Input isRequired type="text" {...register('to_city')} />
              </Box>
              <Box>
                <FormLabel>Post Code</FormLabel>
                <Input isRequired type="text" {...register('to_post_code')} />
              </Box>
              <Box>
                <FormLabel>Country</FormLabel>
                <Input isRequired type="text" {...register('to_country')} />
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormLabel>Invoice Limit Date</FormLabel>
                <Input isRequired type="date" {...register('invoice_due_date')} />
              </Box>
              <Box>
                <FormLabel>Payment Terms</FormLabel>
                <Select isRequired {...register('payment_terms')}>
                  <option value="Net 10 days">Net 10 days</option>
                  <option value="Net 15 days">Net 15 days</option>
                  <option value="Net 30 days">Net 30 days</option>
                  <option value="Net 60 days">Net 60 days</option>
                </Select>
              </Box>
            </HStack>
            <FormLabel>Project Description</FormLabel>
            <Textarea {...register('project_description')} />
            <FormLabel color="red.500" fontWeight="semibold">
              Invoice Price
            </FormLabel>
            <Input isRequired type="number" {...register('invoice_price')} />
          </form>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <ButtonGroup>
            <Button variant="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="sucess" form="new-invoice-form">
              Submit
            </Button>
          </ButtonGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
