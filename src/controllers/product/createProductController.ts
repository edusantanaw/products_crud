import { IController } from "../../@types/controller";
import { CreateProductUsecase } from "../../application/usecases/product/create";
import { httpStatusCreated } from "../../helpers/http";

type data = {
  name: string;
  price: number;
  description: string;
};

export class CreateProductController implements IController<data> {
  constructor(protected createProductUsecase: CreateProductUsecase) {}

  public async handler(data: data) {
    const product = await this.createProductUsecase.create(data);
    return httpStatusCreated(product);
  }
}
