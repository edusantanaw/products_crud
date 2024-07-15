import { IProduct } from "../../../@types/entities";
import { ApplicationValidationException } from "../../exceptions";
import { NotFoundExeption } from "../../exceptions/notFoundExeption";
import { IDeleteRepository } from "../../repositories/delete";
import { ILoadByIdRepository } from "../../repositories/loadById";

interface IProductRepository
  extends IDeleteRepository,
    ILoadByIdRepository<IProduct> {}

export class DeleteProductUsecase {
  constructor(protected repository: IProductRepository) {}
  public async delete(id: string) {
    const product = await this.repository.loadById(id);
    if (!product) throw new NotFoundExeption("Produto não encontrado!");
    if (product.deleted === 1)
      throw new ApplicationValidationException("Produto já foi removido!");
    await this.repository.delete(id);
    return { message: "Produto removido com sucesso!" };
  }
}
