import { Sequelize } from "sequelize";
import sequelize from "../config/configMySQL.js";
import  User  from "./loginSchema.js";


export const exercicios = sequelize.define('treinos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    treino: {
        type: Sequelize.CHAR,
    },
    exercicio: {
        type: Sequelize.STRING,
    },
    grupo: {
        type: Sequelize.STRING,
    },
    series: {
        type: Sequelize.STRING,
    },
    repeticoes: {
        type: Sequelize.STRING,
    },
    peso: {
        type: Sequelize.STRING,
    },
    link: {
        type: Sequelize.STRING,
    },
});

// Definição do relacionamento de chave estrangeira
exercicios.belongsTo(User, {
    constraint : true,
    foreignKey: 'idUser'  
  });

 
export default exercicios;

  // Nome , Exercicio , Grupo , Séries , Repetições , Peso , Link . 