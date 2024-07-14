import { NotFoundExeption } from "../../exceptions/notFoundExeption";
import { ILoadByIdRepository } from "../../repositories/loadById";

export class LoadProductByIdUsecase {
  constructor(protected repository: ILoadByIdRepository<IProduct>) {}
  public async loadById(id: string) {
    const product = await this.repository.loadById(id);
    if (!product) throw new NotFoundExeption("Product not found!");
    return product;
  }
}
