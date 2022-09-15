import { getRedis, setRedis } from "../../config/redis";
import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";

export const GetAllProductsService = async(): Promise<Product[]> => {
    const productsCached = await getRedis("products");
    
    if(!productsCached) {
        const products = await ProductRepository.getAllProducts();

        await setRedis("products", JSON.stringify(products));

        return products;
    } else {
        return JSON.parse(productsCached);
    };
};