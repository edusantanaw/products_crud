import { LoadAllProductsUsecase } from "../../../../application/usecases/product";
import { ProductRepository } from "../../../../infra/repositories";

export function loadAllProductsUsecaseFactory() {
  const repository = new ProductRepository();
  return new LoadAllProductsUsecase(repository);
}
