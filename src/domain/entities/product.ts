import { randomUUID } from "node:crypto";
import { EntityValidationException } from "../exceptions/entityValidation";
import { IProduct } from "../../@types/entities";

type data = {
  id?: string;
  name: string;
  description: string;
  deleted?: boolean;
  price: number;
};

export class ProductEntity {
  private id: string;
  private name: string;
  private description: string;
  private price: number;
  private deleted: number = 0;

  constructor(data: data) {
    this.id = data?.id ?? randomUUID();
    this.name = data.name;
    this.description = data.description;
    this.deleted = data.deleted ? 1 : 0;
    this.price = data.price;
    if (data.price <= 0)
      throw new EntityValidationException(
        "O preço dever ser maior que 0!"
      );
  }

  public get getProduct(): IProduct {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      deleted: this.deleted,
    };
  }
}
