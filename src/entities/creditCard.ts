import { Client } from './client';

export class CreditCard {
    public readonly id?: string;

    public card_number!: string;
    public card_holder_name!: string;
    public value!: number;
    public cvv!: number;
    public exp_date!: string;
    public client?: Client; 
    public client_id!: string;

    constructor(props: Omit<CreditCard, 'id'>) {
        Object.assign(this, props)
    };
};