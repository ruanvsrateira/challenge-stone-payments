import { CreditCard } from "../../entities/creditCard";
import { CreditCardRepository } from "../../repositories/creditCardRepository";

export const DeleteCreditCardFromClient = async (
  clientId: string
): Promise<CreditCard> => {
  const creditCardExist = await CreditCardRepository.findByClientId(clientId);

  if (creditCardExist) {
    const creditCardDeleted =
      await CreditCardRepository.deleteCreditCardFromClient(clientId!);

    return creditCardDeleted;
  } else {
    throw new Error("this user not own credit card");
  }
};
