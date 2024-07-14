import { UpdateProductUsecase } from "../../../../application/usecases/product";
import { ProductRepository } from "../../../../infra/repositories";

export function updateProductUsecaseFactory() {
  const repository = new ProductRepository();
  return new UpdateProductUsecase(repository);
}
