import { ClientRepository } from "../../repositories/clientRepository";
import { ILogin } from "../../interfaces/ILogin";
import { Client } from "../../entities/client";

export const LoginService = async (data: ILogin): Promise<Client> => {
  const clientLogged = await ClientRepository.validateEmailPassword(data);

  if (clientLogged) {
    return clientLogged;
  } else {
    throw new Error("login failed");
  }
};
