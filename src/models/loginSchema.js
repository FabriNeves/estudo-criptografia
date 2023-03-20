import { Sequelize } from "sequelize";
import sequelize from "../config/configMySQL.js";

export const User = sequelize.define('User', {
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
  