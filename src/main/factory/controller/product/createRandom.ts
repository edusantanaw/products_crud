import { CreateRandomProducts } from "../../../../controllers/product/createRandom";
import { createProductUsecaseFactory } from "../../usecases/product/create";

export function createRandomProductsControllerFactory() {
  return new CreateRandomProducts(createProductUsecaseFactory());
}
