import { DeleteController } from "../../../../controllers/generic/delete";
import { deleteProductUsecaseFactory } from "../../usecases/product/delete";

export function deleteProductControllerFactory() {
  return new DeleteController(deleteProductUsecaseFactory());
}
