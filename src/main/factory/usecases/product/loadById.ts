import { LoadProductByIdUsecase } from "../../../../application/usecases/product";
import { ProductRepository } from "../../../../infra/repositories";

export function loadProductByIdUsecaseFactory() {
  const repository = new ProductRepository();
  return new LoadProductByIdUsecase(repository);
}
