import { Request, Response } from 'express';
import { CreateNewTransaction } from '../services/transaction/createNewTransaction';
import { GetAllTransactionsService } from '../services/transaction/getAllTransactionsService';
import { GetTransactionByClientIdService } from '../services/transaction/getTransactionByClientIdService';

class transactionController {
    constructor() {};

    async buy(req: Request, res: Response): Promise<Response> {
        try {
            const {
                client_id, client_name, total_to_pay, credit_card
            } = req.body;
    
            const transactionCreated = await CreateNewTransaction({
                client_id, client_name, total_to_pay, credit_card
            });
    
            return res.json({ transaction_created: transactionCreated });
        } catch(err) {    
            if(err == "Error: data not true") {
                return res.json({ error: String(err).replace('Error: ', '') });
            };

            return res.json({ error: 'unknown error' });
        };
    };

    async get(req: Request, res: Response): Promise<Response> {
        const transactions = await GetAllTransactionsService();
    
        return res.json(transactions);
    };

    async getFromClient(req: Request, res: Response): Promise<Response> {
        const { clientId } = req.params;

        const transactions = await GetTransactionByClientIdService(clientId);

        return res.json(transactions);
    };
};

export const TransactionController = new transactionController();