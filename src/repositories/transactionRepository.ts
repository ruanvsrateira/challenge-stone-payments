import { prismaClient } from "../../prisma/PrismaClient";
import { Transaction } from "../entities/transaction";

class transactionRepository {
  constructor() {}

  async getAllTransactions(): Promise<Transaction[]> {
    const transactions = await prismaClient.transaction.findMany({});

    return transactions;
  }

  async createNewTransaction(data: Transaction): Promise<Transaction> {
    const transactionCreated = await prismaClient.transaction.create({ data });

    return transactionCreated;
  }

  async getTransactionByClientId(clientId: string): Promise<Transaction[]> {
    const transactions = await prismaClient.transaction.findMany({
      where: { clientId },
    });

    return transactions;
  }
}

export const TransactionRepository = new transactionRepository();
