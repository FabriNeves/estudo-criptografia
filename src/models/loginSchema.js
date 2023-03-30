import { Sequelize } from "sequelize";
import sequelize from "../config/configMySQL.js";

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default User;