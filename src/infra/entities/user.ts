import { DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from "../../main/config";

interface IUserCreationAttributes
  extends Optional<IUser, "id" | "createdAt" | "deleted"> {}

const UserModel: ModelDefined<IUser, IUserCreationAttributes> =
  sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      deleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: "users_table", // can't use a table named users in postgres
      timestamps: true,
    }
  );

export default UserModel;
