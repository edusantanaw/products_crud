import { ILoadAllRepository } from "../../repositories/loadAll";

type data = {
  onlyDeleted?: boolean;
};

export class LoadAllProductsUsecase {
  constructor(protected repository: ILoadAllRepository<data, IProduct>) {}
  public async loadAll(data?: data) {
    const products = await this.repository.loadAll(data);
    return products;
  }
}
