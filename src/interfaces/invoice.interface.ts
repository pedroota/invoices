export interface InvoiceInterface {
  id: string;
  from_street_address: string;
  from_city: string;
  from_post_code: string;
  from_country: string;

  to_name: string;
  to_mail: string;
  to_street_address: string;
  to_city: string;
  to_post_code: string;
  to_country: string;

  invoice_due_date: string;
  invoice_price: number;
  invoice_status: 'Paid' | 'Pending';
  invoice_code: string;
  payment_terms: string;
  project_description: string;
}
