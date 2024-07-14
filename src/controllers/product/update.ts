import { IController } from "../../@types/controller";
import { UpdateProductUsecase } from "../../application/usecases/product";
import { httpStatusSuccess } from "../../helpers/http";

export class UpdateProductController implements IController<IProduct> {
  constructor(protected updateProductUsecase: UpdateProductUsecase) {}

  public async handler(data: IProduct): Promise<IHttpStatus> {
    const product = await this.updateProductUsecase.update(data);
    return httpStatusSuccess(product);
  }
}
