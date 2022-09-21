export class Transaction {
  public purchaseId?: string;

  public cardNumber!: string;
  public value!: number;
  public date!: string;
  public clientId!: string;

  constructor(props: Omit<Transaction, "id">) {
    Object.assign(this, props);
  }
}
