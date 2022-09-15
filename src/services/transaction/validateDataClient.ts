import { prismaClient } from "../../../prisma/PrismaClient";
import { BuyProps } from "../../interfaces/IBuyProps";

export const ValidateDataClient = async(data: BuyProps): Promise<boolean> => {
    const realDataClient = await prismaClient.client.findUnique({
        where: { id: data.client_id },
        include: { credit_card: true },
    });

    if(!realDataClient) return false;

    if(
        data.credit_card.card_number == realDataClient.credit_card?.card_number &&
        data.credit_card.cvv == realDataClient.credit_card.cvv &&
        data.credit_card.card_holder_name == realDataClient.credit_card.card_holder_name &&
        data.credit_card.exp_date == realDataClient.credit_card.exp_date &&
        data.credit_card.value == realDataClient.credit_card.value &&
        data.total_to_pay <= realDataClient.credit_card.value
    ) {
        return true;
    } else {
        return false;
    };
};