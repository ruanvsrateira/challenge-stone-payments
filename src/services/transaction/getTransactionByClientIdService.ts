import { Transaction } from "../../entities/transaction";
import { TransactionRepository } from "../../repositories/transactionRepository";

export const GetTransactionByClientIdService = async (
  clientId: string
): Promise<Transaction[]> => {
  const transactions = TransactionRepository.getTransactionByClientId(clientId);

  return transactions;
};
