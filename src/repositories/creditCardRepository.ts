import { prismaClient } from "../../prisma/PrismaClient";
import { CreditCard } from "../entities/creditCard";

class creditCardRepository {
  constructor() {}

  async createCreditCard(data: CreditCard) {
    const creditCardCreated = await prismaClient.creditCard.create({
      data: {
        cardHolderName: data.cardHolderName,
        cardNumber: data.cardNumber,
        cvv: data.cvv,
        expDate: data.expDate,
        value: data.value,
        client: {
          connect: {
            id: data.clientId,
          },
        },
      },
    });

    return creditCardCreated;
  }

  async deleteCreditCardFromClient(clientId: string) {
    const creditCard = await prismaClient.creditCard.delete({
      where: { clientId },
    });

    return creditCard;
  }

  async findByClientId(clientId: string) {
    const creditCard = await prismaClient.creditCard.findUnique({
      where: { clientId },
    });

    return creditCard;
  }

  async findByCreditCardNumber(
    cardNumber: string
  ): Promise<CreditCard | null> {
    const creditCard = await prismaClient.creditCard.findUnique({
      where: { cardNumber },
    });

    return creditCard;
  }
}

export const CreditCardRepository = new creditCardRepository();
