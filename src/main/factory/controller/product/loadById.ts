import { LoadByIdController } from "../../../../controllers/generic/loadById";
import { loadProductByIdUsecaseFactory } from "../../usecases/product/loadById";

export function loadProductByIdControllerFactory() {
  return new LoadByIdController(loadProductByIdUsecaseFactory());
}
