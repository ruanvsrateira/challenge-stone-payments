import { Request, Response } from "express";
import { CreateNewTransaction } from "../services/transaction/createNewTransaction";
import { GetAllTransactionsService } from "../services/transaction/getAllTransactionsService";
import { GetTransactionByClientIdService } from "../services/transaction/getTransactionByClientIdService";

class transactionController {
  constructor() {}

  async buy(req: Request, res: Response): Promise<Response> {
    try {
      const { clientId, clientName, totalToPay, creditCard } = req.body;

      const transactionCreated = await CreateNewTransaction({
        clientId,
        clientName,
        totalToPay,
        creditCard,
      });

      return res.json({ transaction_created: transactionCreated });
    } catch (err) {
      if (err == "Error: data not true") {
        return res.json({ error: String(err).replace("Error: ", "") });
      }

      return res.json({ error: "unknown error" });
    }
  }

  async get(req: Request, res: Response): Promise<Response> {
    const transactions = await GetAllTransactionsService();

    return res.json(transactions);
  }

  async getFromClient(req: Request, res: Response): Promise<Response> {
    const { clientId } = req.params;

    const transactions = await GetTransactionByClientIdService(clientId);

    return res.json(transactions);
  }
}

export const TransactionController = new transactionController();
