import Sequelize from "sequelize";
import createDataBase from "./createDB.js";
import dotenv from "dotenv";

dotenv.config();
const dbName = "loginDB";
const DB_PASSWORD = "meusql";

const sequelize = new Sequelize(dbName, "root", DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

let dbStatusCreate = true;


if (dbStatusCreate) {
  await createDataBase(dbName,DB_PASSWORD);
  dbStatusCreate = false;

 
}

export default sequelize;

// -> schema.js