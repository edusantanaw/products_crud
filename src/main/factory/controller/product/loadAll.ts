import { LoadAllController } from "../../../../controllers/generic/loadAll";
import { loadAllProductsUsecaseFactory } from "../../usecases/product/loadAll";

export function loadAllProductControllerFactory() {
  return new LoadAllController(loadAllProductsUsecaseFactory());
}
