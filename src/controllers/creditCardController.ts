import { Request, Response } from "express";
import { CreditCard } from "../entities/creditCard";
import { CreateNewCreditCardService } from "../services/creditCard/createNewCreditCard";
import { DeleteCreditCardFromClient } from "../services/creditCard/deleteCreditCardFromClient";

class creditCardController {
  constructor() {}

  async create(req: Request, res: Response): Promise<Response> {
    const { cardNumber, cvv, expDate, value } = req.body;

    try {
      const creditCard = new CreditCard({
        cardHolderName: req.session.client!.name,
        cardNumber,
        cvv,
        expDate,
        value,
        clientId: req.session.client!.id!,
      });

      const creditCardCreated = await CreateNewCreditCardService(creditCard);

      return res.json({ credit_card_created: creditCardCreated });
    } catch (err) {
      if (err == "Error: this client already own credit card") {
        return res.json({ error: String(err).replace("Error: ", "") });
      }

      if (err == "Error: card number already registred") {
        return res.json({ error: String(err).replace("Error: ", "") });
      }

      return res.json({ error: "unknown error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const client_id = req.session.client?.id!;

    try {
      const creditCardDeleted = await DeleteCreditCardFromClient(client_id);

      return res.json({ credit_card_deleted: creditCardDeleted });
    } catch (err) {
      if (err == "Error: this user not own credit card") {
        return res.json({ error: String(err).replace("Error: ", "") });
      }

      return res.json({ error: "unknown error" });
    }
  }
}

export const CreditCardController = new creditCardController();
