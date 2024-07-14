import { UpdateProductController } from "../../../../controllers/product/update";
import { updateProductUsecaseFactory } from "../../usecases/product/update";

export function updateProductControllerFactory() {
  return new UpdateProductController(updateProductUsecaseFactory());
}
