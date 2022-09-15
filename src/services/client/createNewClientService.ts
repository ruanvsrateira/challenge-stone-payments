import { Client } from '../../entities/client';
import { ClientRepository } from '../../repositories/clientRepository';

export const CreateNewClientService = async(data: Client): Promise<Client> => {
    const clientExist = await ClientRepository.findByEmail(data.email);

    if(clientExist) {
        throw new Error('already exist a client registred in this email');
    };

    const clientCreated = await ClientRepository.createClient(data);

    return clientCreated;
};
