export interface BuyProps {
    client_id: string,
    client_name: string,
    total_to_pay: number,
    credit_card: {
        card_number: string,
        value: number,
        cvv: number,
        card_holder_name: string,
        exp_date: string,
    },
};