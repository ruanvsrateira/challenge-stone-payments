import { Request, Response } from 'express';
import { Client } from '../entities/client';
import { CreateNewClientService } from '../services/client/createNewClientService';

class clientController {
    constructor() {};

    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const client = new Client({ name, email, password });
        
        try {
            const clientCreated = await CreateNewClientService(client);

            return res.json({ client_created: clientCreated });
        } catch(err) {
            if(err == 'Error: already exist a client registred in this email') {
                return res.json({ error: String(err).replace('Error: ', '') });
            };
        };
    };
};

export const ClientController = new clientController();