import create from 'zustand';
import { InvoiceInterface } from '../interfaces/invoice.interface';

type useInvoiceStoreType = {
  invoices: InvoiceInterface[];
  addInvoice: (invoice: InvoiceInterface) => void;
  deleteById: (invoiceId?: string) => void;
  changeStatus: (status: 'Paid' | 'Pending', invoiceId?: string) => void;
};

export const useInvoiceStore = create<useInvoiceStoreType>((set) => ({
  invoices: [],

  addInvoice: (invoice: InvoiceInterface) => {
    set((state) => ({ invoices: [...state.invoices, invoice] }));
  },

  deleteById: (invoiceId?: string) => {
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== invoiceId)
    }));
  },

  changeStatus: (status: 'Paid' | 'Pending', invoiceId?: string) => {
    set((state) => ({
      invoices: state.invoices.map((invoice) =>
        invoice.id === invoiceId
          ? ({ ...invoice, invoice_status: status } as InvoiceInterface)
          : invoice
      )
    }));
  }
}));
