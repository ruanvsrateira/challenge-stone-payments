import { getRedis, setRedis } from "../../config/redis";
import { Transaction } from "../../entities/transaction";
import { TransactionRepository } from "../../repositories/transactionRepository";

export const GetAllTransactionsService = async (): Promise<Transaction[]> => {
  const transactionsCached = await getRedis("transactions");

  if (!transactionsCached) {
    const transactions = await TransactionRepository.getAllTransactions();

    setRedis("transactions", JSON.stringify(transactions));

    return transactions;
  } else {
    return JSON.parse(transactionsCached);
  }
};
