import { CreditCard } from "../../entities/creditCard";
import { ClientRepository } from "../../repositories/clientRepository";
import { CreditCardRepository } from '../../repositories/creditCardRepository';

export const CreateNewCreditCardService = async(data: CreditCard): Promise<CreditCard> => {
    const client = await ClientRepository.findById(data.client_id);
    const card_number_exist = await CreditCardRepository.findByCreditCardNumber(data.card_number);

    console.log(card_number_exist)

    if(client?.credit_card) {
        throw new Error('this client already own credit card');
    };

    if(card_number_exist) {
        throw new Error('card number already registred');
    };

    const creditCardCreated = await CreditCardRepository.createCreditCard(data);
    return creditCardCreated;
};