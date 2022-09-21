import { prismaClient } from "../../prisma/PrismaClient";
import { Client } from "../entities/client";
import { ILogin } from "../interfaces/ILogin";

class clientRepository {
  constructor() {}

  async createClient(data: Client): Promise<Client> {
    const clientExist = await prismaClient.client.findUnique({
      where: { email: data.email },
    });

    const clientCreated = await prismaClient.client.create({
      data,
    });

    return clientCreated;
  }

  async validateEmailPassword(data: ILogin): Promise<false | Client> {
    const clientLogged = await prismaClient.client.findUnique({
      where: { email: data.email },
    });

    return clientLogged?.password == data.password ? clientLogged : false;
  }

  async findById(id: string) {
    const client = await prismaClient.client.findUnique({
      where: { id },
      include: { creditCard: true },
    });

    return client;
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await prismaClient.client.findUnique({
      where: { email },
    });

    return client;
  }
}

export const ClientRepository = new clientRepository();
