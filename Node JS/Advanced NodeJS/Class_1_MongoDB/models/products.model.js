import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class ProductModel {
  static async getAllProducts() {
    const collection = await getDb().collection("products");
    // console.log("collection", collection);
    const products = await collection.find().toArray();
    return products;
  }

  static async getProductById(id) {
    const collection = await getDb().collection("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });
    console.log("product", product);
    return product;
  }

  static async addProduct(product) {
    const collection = await getDb().collection("products");
    const createdProductInfo = await collection.insertOne(product);
    return { id: createdProductInfo.insertedId, ...product };
  }

  static async updateProduct(productId, body) {
    const collection = await getDb().collection("products");
    const result = await collection.updateOne({ _id: new ObjectId(productId) }, { $set: body });
    return result;
  }

  static async deleteProduct(productId) {
    const collection = await getDb().collection("products");
    const deleteresponse = await collection.deleteOne({ _id: new ObjectId(productId) });
    console.log(deleteresponse);
  }

  static async makePurchase(purchase) {
    //orderedBy  string
    //productId string
    //quantity num

    const product = await this.getProductById(purchase.productId);

    if (!product) {
      throw new Error(`Product with id:${purchase.productId} does not exist`);
    }
    //product exist

    if (product.stock < purchase.quantity) {
      throw new Error(`Not enough in stock `);
    }
    //enough in stock

    const collection = await getDb().collection("purchases");

    const createdPurchaseReponse = await collection.insertOne(purchase);

    const updatedProduct = {
      stock: product.stock - purchase.quantity,
      purchases: product.purchases + purchase.quantity,
    };

    await this.updateProduct(purchase.productId, updatedProduct);

    return { id: createdPurchaseReponse.insertedId, ...purchase };
  }
  static async updatedPurchase(purchaseId, body) {
    const product = await this.getProductById(body.productId);
    if (!product) {
      throw new Error(`Product doesn't exist `);
    }

    if (product.stock < body.quantity) {
      throw new Error(`Not enough in stock`);
    }

    const collection = await getDb().collection("purchases");
    const updatedPurchase = await collection.updateOne({ _id: new ObjectId(purchaseId) }, { $set: body });

    const updatedProduct = {
      stock: product.stock - body.quantity,
      purhcases: product.purchase + body.quantity,
    };
    this.updateProduct(body.product);
  }
}
