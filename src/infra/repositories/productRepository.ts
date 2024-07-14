import { ProductModel } from "../entities";

export class ProductRepository {
  private repository = ProductModel;

  public async create(data: IProduct) {
    const product = await this.repository.create(data);
    product.save();
    return product.dataValues;
  }

  public async loadById(id: string) {
    const product = await this.repository.findOne({ where: { id } });
    if (!product) return null;
    return product.dataValues;
  }

  public async delete(id: string) {
    await this.repository.update({ deleted: 1 }, { where: { id } });
  }

  public async update(data: IProduct) {
    await this.repository.update(data, {
      where: { id: data.id },
    });
    return data;
  }

  public async loadAll() {
    const products = await this.repository.findAll({ where: { deleted: 0 } });
    return products.map((e) => e.dataValues);
  }
}
