import { Sequelize } from 'sequelize';

const db = new Sequelize('coderhouse', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const initMySqlDB = async () => {
    try {
      await db.sync({ force: false });
      console.log(' >>>> Conectado a la base de datos MYSQL');
    } catch (err) {
      console.log(err);
    }
  };
  

export default db;

//! --> model product