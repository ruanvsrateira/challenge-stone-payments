import { Router } from "express";
import { ClientController } from "./controllers/clientController";
import { CreditCardController } from "./controllers/creditCardController";
import { LoginController } from "./controllers/loginController";
import { ProductController } from "./controllers/productController";
import { TransactionController } from "./controllers/transactionController";
import { IsLoggedMiddleware } from "./middlewares/isLoggedMiddleware";

const route = Router();

// route manipulation products
route.get("/starstore/product", ProductController.get);
route.post("/starstore/product", IsLoggedMiddleware, ProductController.create);
route.delete("/starstore/product/delete/:id", ProductController.delete);
route.put("/starstore/product/edit/:id", ProductController.edit);

// route manipulation credit card
route.post(
  "/starstore/credit-card",
  IsLoggedMiddleware,
  CreditCardController.create
);
route.delete(
  "/starstore/credit-card/delete",
  IsLoggedMiddleware,
  CreditCardController.delete
);

// route manipulation client
route.post("/starstore/client", ClientController.create);
route.post("/starstore/client/login", LoginController.login);
route.get(
  "/starstore/client/logout",
  IsLoggedMiddleware,
  LoginController.logout
);

// route manipulation buy and history
route.post("/starstore/buy", IsLoggedMiddleware, TransactionController.buy);
route.get("/starstore/history", TransactionController.get);
route.get("/starstore/history/:clientId", TransactionController.getFromClient);

export default route;
