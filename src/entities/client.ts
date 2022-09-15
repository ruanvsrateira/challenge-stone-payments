import { CreditCard } from "./creditCard";

export class Client {
    public readonly id?: string;

    public name!: string;
    public email!: string;
    public password!: string;
    public credit_card?: CreditCard;

    constructor(props: Omit<Client, 'id'>) {
        Object.assign(this, props)
    };
};