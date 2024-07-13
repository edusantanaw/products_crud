import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../../main/config";

const ProductModel: ModelDefined<IProduct, IProduct> = sequelize.define(
  "product",
  {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    createdAt: DataTypes.DATE,
    deleted: DataTypes.INTEGER,
  }
);

export default ProductModel;
