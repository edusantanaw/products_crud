import { DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from "../../main/config";

interface IProductCreationAttributes
  extends Optional<IProduct, "id" | "createdAt" | "deleted"> {}

const ProductModel: ModelDefined<IProduct, IProductCreationAttributes> =
  sequelize.define(
    "Product",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: "products",
      timestamps: true,
    }
  );

export default ProductModel;
