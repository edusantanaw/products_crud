import { ProductEntity } from "../../../domain/entities/product";
import { ICreateRepository } from "../../repositories/create";

type data = {
  name: string;
  price: number;
  description: string;
};

export class CreateProductUsecase {
  constructor(protected productRepository: ICreateRepository<IProduct>) {}

  public async create(data: data) {
    const productEntity = new ProductEntity(data);
    const createdProduct = await this.productRepository.create(
      productEntity.getProduct
    );
    return createdProduct;
  }
}
