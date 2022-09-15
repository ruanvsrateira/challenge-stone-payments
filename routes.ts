import { Router } from 'express';
import { ClientController } from './src/controllers/clientController';
import { CreditCardController } from './src/controllers/creditCardController';
import { LoginController } from './src/controllers/loginController';
import { ProductController } from './src/controllers/productController';
import { TransactionController } from './src/controllers/transactionController';
import { IsLoggedMiddleware } from './src/middlewares/isLoggedMiddleware';

const route = Router();

route.get('/starstore/product', ProductController.get);
route.post('/starstore/product', IsLoggedMiddleware, ProductController.create);
route.delete('/starstore/product/delete/:id', ProductController.delete);
route.put('/starstore/product/edit/:id', ProductController.edit);

route.post('/starstore/credit-card', IsLoggedMiddleware, CreditCardController.create);
route.delete('/starstore/credit-card/delete', IsLoggedMiddleware, CreditCardController.delete);

route.post('/starstore/client', ClientController.create);

route.post('/starstore/client/login', LoginController.login);
route.get('/starstore/client/logout', IsLoggedMiddleware, LoginController.logout);

route.post('/starstore/buy', IsLoggedMiddleware, TransactionController.buy);
route.get('/starstore/history', TransactionController.get);
route.get('/starstore/history/:clientId', TransactionController.getFromClient);

export default route;