import { Container, useDisclosure } from '@chakra-ui/react';
import { DetailsDashboard } from './components/DetailsDashboard';
import { HeaderDashboard } from './components/HeaderDashboard';
import { ListingInvoices } from './components/ListingInvoices';
import { ContainerDashboard } from './styles';
import { Sidebar } from '../../components/Sidebar';

export function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ContainerDashboard>
      <HeaderDashboard />
      <Container maxW="container.lg">
        <DetailsDashboard onOpen={onOpen} />
        <ListingInvoices />
      </Container>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </ContainerDashboard>
  );
}
