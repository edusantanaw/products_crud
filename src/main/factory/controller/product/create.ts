import { CreateProductController } from "../../../../controllers/product/createProductController";
import { createProductUsecaseFactory } from "../../usecases/product/create";

export function createProductControllerFactory() {
  return new CreateProductController(createProductUsecaseFactory());
}
