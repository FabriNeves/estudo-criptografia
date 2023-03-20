import Sequelize from "sequelize";
import createDataBase from "./index.js";
import dotenv from "dotenv";

dotenv.config();
const dbName = "loginDB";
const DB_PASSWORD = "meusql";
console.log(DB_PASSWORD);
const sequelize = new Sequelize(dbName, "root", DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

let dbStatusCreate = true;
console.log(dbStatusCreate);

if (dbStatusCreate) {
  await createDataBase(dbName,DB_PASSWORD);
  dbStatusCreate = false;
  console.log(dbStatusCreate); 
}

export default sequelize;

// -> schema.js