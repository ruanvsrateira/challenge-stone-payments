import { prismaClient } from "../../prisma/PrismaClient";
import { Product } from "../entities/product";

class productRepository {
  async getAllProducts(): Promise<Product[]> {
    const products = await prismaClient.product.findMany({});

    return products;
  }

  async createNewProduct(data: Product): Promise<Product> {
    const productCreated = await prismaClient.product.create({
      data,
    });

    return productCreated;
  }

  async deleteProduct(id: string): Promise<Product> {
    const productDeleted = await prismaClient.product.delete({
      where: { id },
    });

    return productDeleted;
  }

  async edit(id: string, data: Product): Promise<Product> {
    const productUpdated = await prismaClient.product.update({
      where: { id },
      data,
    });

    return productUpdated;
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prismaClient.product.findUnique({ where: { id } });

    return product;
  }
}

export const ProductRepository = new productRepository();
