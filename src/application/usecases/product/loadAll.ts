import { ILoadAllRepository } from "../../repositories/loadAll";

export class LoadAllProductsUsecase {
  constructor(protected repository: ILoadAllRepository<IProduct>) {}
  public async loadAll() {
    const products = await this.repository.loadAll();
    return products;
  }
}
