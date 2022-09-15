import { Transaction } from '../../entities/transaction';
import { BuyProps } from '../../interfaces/IBuyProps';
import { TransactionRepository } from "../../repositories/transactionRepository";
import { ValidateDataClient } from './validateDataClient';
import { DateGenerator } from '../../utils/dateGenerator';
import { ReloadCache } from '../redis/reloadCache';

export const CreateNewTransaction = async(data: BuyProps): Promise<Transaction> => {
    const requestTransaction = new Transaction({
        card_number: data.credit_card.card_number,
        client_id: data.client_id,
        value: data.total_to_pay,
        date: DateGenerator()
    });

    const validate = await ValidateDataClient(data);

    if(validate) {
        const transactionCreated = await TransactionRepository.createNewTransaction(requestTransaction);

        await ReloadCache("transaction");

        return transactionCreated;
    } else {
        throw new Error('data not true');
    };
};