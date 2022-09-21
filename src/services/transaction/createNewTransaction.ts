import { Transaction } from "../../entities/transaction";
import { BuyProps } from "../../interfaces/IBuyProps";
import { TransactionRepository } from "../../repositories/transactionRepository";
import { ValidateDataClient } from "./validateDataClient";
import { DateGenerator } from "../../utils/dateGenerator";
import { ReloadCache } from "../redis/reloadCache";

export const CreateNewTransaction = async (
  data: BuyProps
): Promise<Transaction> => {
  const requestTransaction = new Transaction({
    cardNumber: data.creditCard.cardNumber,
    clientId: data.clientId,
    value: data.totalToPay,
    date: DateGenerator(),
  });

  const validate = await ValidateDataClient(data);

  if (validate) {
    const transactionCreated = await TransactionRepository.createNewTransaction(
      requestTransaction
    );

    await ReloadCache("transaction");

    return transactionCreated;
  } else {
    throw new Error("data not true");
  }
};
