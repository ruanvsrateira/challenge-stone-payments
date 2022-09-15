import { prismaClient } from '../../prisma/PrismaClient';
import { CreditCard } from '../entities/creditCard';

class creditCardRepository {
    constructor(){};

    async createCreditCard(data: CreditCard) {
        const creditCardCreated = await prismaClient.creditCard.create({
            data: {
                card_holder_name: data.card_holder_name,
                card_number: data.card_number,
                cvv: data.cvv,
                exp_date: data.exp_date,
                value: data.value,
                client: {
                    connect: {
                        id: data.client_id
                    },
                },
            },  
        });

        return creditCardCreated;
    };

    async deleteCreditCardFromClient(client_id: string) {
        const creditCard = await prismaClient.creditCard.delete({
            where: { client_id },
        });

        return creditCard;
    };

    async findByClientId(client_id: string) {
        const creditCard = await prismaClient.creditCard.findUnique({ where: { client_id } });
    
        return creditCard;
    };

    async findByCreditCardNumber(card_number: string): Promise<CreditCard|null> {
        const creditCard = await prismaClient.creditCard.findUnique({ where: {card_number}});

        return creditCard;
    };
};

export const CreditCardRepository = new creditCardRepository();