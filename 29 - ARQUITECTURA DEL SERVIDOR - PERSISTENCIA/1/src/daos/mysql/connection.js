import { Sequelize } from "sequelize";
import "dotenv/config";

const db = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export const initMySqlDB = async () => {
  try {
    await db.sync({ force: false });
    console.log("Conectado a la base de datos MySql!");
  } catch (error) {
    console.log(error);
  }
};

export default db;
