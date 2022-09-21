import { Request, Response } from "express";
import { Product } from "../entities/product";
import { GetAllProductsService } from "../services/product/getAllProductsService";
import { CreateNewProductService } from "../services/product/createNewProductService";
import { DeleteProductService } from "../services/product/deleteProductService";
import { EditProductService } from "../services/product/editProductService";

class productController {
  constructor() {}

  async get(req: Request, res: Response): Promise<Response> {
    try {
      const products = await GetAllProductsService();

      return res.json({ products });
    } catch (err) {
      return res.json({ error: "unknown error" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { title, price, zipcode, thumbnailHd, date } = req.body;
    const product = new Product({
      title,
      price,
      zipcode,
      seller: req.session.client!.name,
      thumbnailHd,
      date,
    });

    try {
      const productCreated = await CreateNewProductService(product);

      return res.json({ product_created: productCreated });
    } catch (err) {
      if (err == "Error: Insuficient Arguments") {
        return res.json({ error: `${String(err).replace("Error: ", "")}` });
      }

      console.log(err);
      return res.json({ error: "unknown error" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const productDeleted = await DeleteProductService(id);

      return res.json({ product_deleted: productDeleted });
    } catch (err) {
      if (err == "Error: product not finded by this id") {
        res.json({ error: `${String(err).replace("Error: ", "")}` });
      }

      return res.json({ error: "unknown error" });
    }
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, price, zipcode, seller, thumbnailHd, date } = req.body;
    const productSended = new Product({
      title,
      price,
      zipcode,
      seller,
      thumbnailHd,
      date,
    });

    try {
      const productUpdated = await EditProductService(id, productSended);

      return res.json({ product_updated: productUpdated });
    } catch (err) {
      if (err == "Error: product not finded by this id") {
        res.json({ error: `${String(err).replace("Error: ", "")}` });
      }

      return res.json({ error: "unknown error" });
    }
  }
}

export const ProductController = new productController();
