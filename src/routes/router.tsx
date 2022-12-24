import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Invoice } from '../pages/Invoice';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/invoices/:invoiceId" element={<Invoice />} />
        <Route path="*" element={<h1>Desculpe, está página não existe!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
