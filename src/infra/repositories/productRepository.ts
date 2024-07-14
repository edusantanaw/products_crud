import { ProductModel } from "../entities";

export class ProductRepository {
  private repository = ProductModel;

  public async create(data: IProduct) {
    const product = await this.repository.create(data)
    product.save()
    return product.dataValues
  }
}
