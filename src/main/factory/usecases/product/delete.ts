import { DeleteProductUsecase } from "../../../../application/usecases/product";
import { ProductRepository } from "../../../../infra/repositories";

export function deleteProductUsecaseFactory(){
    const repository = new ProductRepository()
    return new DeleteProductUsecase(repository)
}