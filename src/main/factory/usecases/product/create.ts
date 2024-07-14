import { CreateProductUsecase } from "../../../../application/usecases/product";
import { ProductRepository } from "../../../../infra/repositories";

export function createProductUsecaseFactory() {
  const productRepository = new ProductRepository();
  return new CreateProductUsecase(productRepository);
}
