import db from "../connection.js";
import { DataTypes } from "sequelize";

export const ProductModel = db.define("products", {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
});
