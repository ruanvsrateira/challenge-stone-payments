import { Product } from "../../entities/product";
import { ProductRepository } from "../../repositories/productRepository";
import { ReloadCache } from "../redis/reloadCache";

export const CreateNewProductService = async (
  data: Product
): Promise<Product> => {
  if (
    !data.title ||
    !data.price ||
    !data.seller ||
    !data.zipcode ||
    !data.thumbnailHd ||
    !data.date
  ) {
    throw new Error("Insuficient Arguments");
  }

  const productCreated = await ProductRepository.createNewProduct(data);

  await ReloadCache("product");

  return productCreated;
};
