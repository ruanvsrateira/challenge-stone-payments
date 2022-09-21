export interface BuyProps {
  clientId: string;
  clientName: string;
  totalToPay: number;
  creditCard: {
    cardNumber: string;
    value: number;
    cvv: number;
    cardHolderName: string;
    expDate: string;
  };
}
