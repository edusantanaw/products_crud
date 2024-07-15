import { IProduct } from "../../@types/entities";
import { ProductModel } from "../entities";

export class ProductRepository {
  private repository = ProductModel;

  public async create(data: IProduct) {
    const product = await this.repository.create(data);
    await product.save();
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

  public async loadAll(data?: { onlyDeleted?: boolean }) {
    const products = await this.repository.findAll({
      where: { deleted: data?.onlyDeleted ? 1 : 0 },
      order: [[data?.onlyDeleted ? "updatedAt" : "createdAt", "DESC"]],
    });
    return products.map((e) => e.dataValues);
  }
}
