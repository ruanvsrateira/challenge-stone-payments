import { CreditCard } from "../../entities/creditCard";
import { CreditCardRepository } from "../../repositories/creditCardRepository";

export const DeleteCreditCardFromClient = async(client_id: string): Promise<CreditCard> => {
    const creditCardExist = await CreditCardRepository.findByClientId(client_id);

    if(creditCardExist) {
        const creditCardDeleted = await CreditCardRepository.deleteCreditCardFromClient(client_id!);

        return creditCardDeleted;
    } else {
        throw new Error('this user not own credit card');
    };
};