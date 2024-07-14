import { CreateProductController } from "../../../../controllers/product/create";
import { createProductUsecaseFactory } from "../../usecases/product/create";

export function createProductControllerFactory() {
  return new CreateProductController(createProductUsecaseFactory());
}
