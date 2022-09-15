import { setRedis } from "../../config/redis";
import { ProductRepository } from "../../repositories/productRepository";
import { TransactionRepository } from "../../repositories/transactionRepository";

export const ReloadCache = async(type: "product"|"transaction") => {
    if(type == "product") {
        const products = await ProductRepository.getAllProducts();

        setRedis("products", JSON.stringify(products));
    };

    if(type == "transaction") {
        const transactions = await TransactionRepository.getAllTransactions();

        setRedis("transactions", JSON.stringify(transactions));
    };
};