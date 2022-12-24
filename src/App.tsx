import { Router } from './routes/router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router />
    </ChakraProvider>
  );
}

export default App;
