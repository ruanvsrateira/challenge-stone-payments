import { Client } from "./client";

export class CreditCard {
  public readonly id?: string;

  public cardNumber!: string;
  public cardHolderName!: string;
  public value!: number;
  public cvv!: number;
  public expDate!: string;
  public client?: Client;
  public clientId!: string;

  constructor(props: Omit<CreditCard, "id">) {
    Object.assign(this, props);
  }
}
