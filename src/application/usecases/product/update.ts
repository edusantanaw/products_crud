import { IUpdateRepository } from "./../../repositories/update";
import { ILoadByIdRepository } from "../../repositories/loadById";
import { NotFoundExeption } from "../../exceptions/notFoundExeption";
import { ProductEntity } from "../../../domain/entities/product";

interface IProductRepository
  extends ILoadByIdRepository<IProduct>,
    IUpdateRepository<IProduct> {}

export class UpdateProductUsecase {
  constructor(protected repository: IProductRepository) {}
  public async update(data: IProduct) {
    const productExists = await this.repository.loadById(data.id!);
    if (!productExists) throw new NotFoundExeption("Product not found!");
    const product = new ProductEntity({
      ...productExists,
      ...data,
      deleted: productExists.deleted === 1,
    }).getProduct;
    await this.repository.update(product);
    return product;
  }
}
