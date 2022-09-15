import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";
import { ReloadCache } from "../redis/reloadCache";

export const EditProductService = async(id: string, data: Product): Promise<Product> => {
    const productExist = await ProductRepository.findById(id);

    if (!productExist) throw new Error('product not finded by this id');

    const productUpdated = await ProductRepository.edit(id, data);

    await ReloadCache("product");

    return productUpdated;
};