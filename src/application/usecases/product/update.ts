import { IUpdateRepository } from "./../../repositories/update";
import { ILoadByIdRepository } from "../../repositories/loadById";
import { NotFoundExeption } from "../../exceptions/notFoundExeption";
import { ProductEntity } from "../../../domain/entities/product";
import { IProduct } from "../../../@types/entities";

interface IProductRepository
  extends ILoadByIdRepository<IProduct>,
    IUpdateRepository<IProduct> {}

export class UpdateProductUsecase {
  constructor(protected repository: IProductRepository) {}
  public async update(data: IProduct) {
    const productExists = await this.repository.loadById(data.id!);
    if (!productExists) throw new NotFoundExeption("Produto não encontrado!");
    const product = new ProductEntity({
      ...productExists,
      ...data,
      deleted: productExists.deleted === 1,
    }).getProduct;
    await this.repository.update(product);
    return product;
  }
}
