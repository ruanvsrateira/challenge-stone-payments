export class Transaction {
    public purchase_id?: string

    public card_number!: string
    public value!: number
    public date!: string
    public client_id!: string

    constructor(props: Omit<Transaction, 'id'>) {
        Object.assign(this, props);
    };
}