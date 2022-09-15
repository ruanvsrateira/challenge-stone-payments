import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";
import { ReloadCache } from "../redis/reloadCache";

export const DeleteProductService = async(id: string): Promise<Product> => {
    const productExist = await ProductRepository.findById(id);

    if (!productExist) throw new Error('product not finded by this id');

    const productDeleted = await ProductRepository.deleteProduct(id);

    await ReloadCache("product");
    
    return productDeleted;
};