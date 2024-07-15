import { IController } from "../../@types/controller";
import { IProduct } from "../../@types/entities";
import { CreateProductUsecase } from "../../application/usecases/product";
import { httpStatusCreated } from "../../helpers/http";

const PRODUCTS_LIMIT = 50;
const CREATE_PER = 10;

export class CreateRandomProducts implements IController<null> {
  constructor(protected createProductUsecase: CreateProductUsecase) {}

  public async handler() {
    const products = [];
    for (let i = 0; i < PRODUCTS_LIMIT; i += CREATE_PER) {
      const current: Promise<IProduct>[] = [];
      for (let j = 0; j < CREATE_PER; j++) {
        const randomValue = Math.random();
        const data = {
          name: `Product ${i+j}`,
          description: "Product auto generated",
          price: Number(((randomValue + i) * 100).toFixed(2)),
        };
        current.unshift(this.createProductUsecase.create(data));
      }
      const createdProducts = await Promise.all(current);
      products.unshift(...createdProducts);
    }
    return httpStatusCreated(products);
  }
}
