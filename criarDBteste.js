import sequelize from "./src/config/configMySQL.js"
import {User} from "./src/models/loginSchema.js"
import UserModule from "./src/config/userModule.js"



sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

await sequelize.sync({ force: true }); // 


const hashSenha = await UserModule.hashPassword("123NovaSenha")
const user1 = await User.create({
    username: "Nome",
    email: "email@mail.com",
    hash:  hashSenha
});