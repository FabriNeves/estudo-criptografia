import sequelize from "./src/config/configMySQL.js"
import {User} from "./src/models/loginSchema.js"



sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

await sequelize.sync({ force: true }); // 

const user1 = await User.create({
    username: "Nome",
    email: "email@mail.com",
    hash: "bedd5689jf2321aznfkk97rdfbmy"
});