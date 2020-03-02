export interface Application {
  id: string;
  date: string;
  createById: string;
  createdAt: string;
  address: string;
  price: number;
  moneyIn: boolean;
  approved: boolean;
  invoiceOut: boolean;
  invoicePaid: boolean;
  completed: boolean;
  appType: string;
  offerOut: boolean;
  listingAgreement: boolean;
  offerExecuted: boolean;
  closed: boolean;
  denied: boolean;
}
