import { prismaClient } from "../../../prisma/PrismaClient";
import { BuyProps } from "../../interfaces/IBuyProps";

export const ValidateDataClient = async (data: BuyProps): Promise<boolean> => {
  const realDataClient = await prismaClient.client.findUnique({
    where: { id: data.clientId },
    include: { creditCard: true },
  });

  if (!realDataClient) return false;

  if (
    data.creditCard.cardNumber == realDataClient.creditCard?.cardNumber &&
    data.creditCard.cvv == realDataClient.creditCard.cvv &&
    data.creditCard.cardHolderName ==
      realDataClient.creditCard.cardHolderName &&
    data.creditCard.expDate == realDataClient.creditCard.expDate &&
    data.creditCard.value == realDataClient.creditCard.value &&
    data.totalToPay <= realDataClient.creditCard.value
  ) {
    return true;
  } else {
    return false;
  }
};
