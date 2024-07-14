import { IController } from "../../@types/controller";
import { CreateProductUsecase } from "../../application/usecases/product";
import { httpStatusCreated } from "../../helpers/http";

const PRODUCTS_LIMIT = 50;

export class CreateRandomProducts implements IController<null> {
  constructor(protected createProductUsecase: CreateProductUsecase) {}

  public async handler() {
    const products = [];
    for (let i = 0; i < PRODUCTS_LIMIT; i++) {
      const randomValue = Math.random();
      const data = {
        name: `Product ${i}`,
        description: "Product auto generated",
        price: Number(((randomValue + i) * 100).toFixed(2)),
      };
      const product = await this.createProductUsecase.create(data);
      products.push(product);
    }
    return httpStatusCreated(products);
  }
}
