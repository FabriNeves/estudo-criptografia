import sequelize from "./src/config/configMySQL.js"
import  User  from "./src/models/loginSchema.js"
import UserModule from "./src/config/userModule.js"
import exercicios from "./src/models/userDataSchema.js";

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!");
}).catch((erro) => {
    console.log("Falha ao se conectar:", erro);
});

await sequelize.sync({ force: true });

const hashSenha = await UserModule.hashPassword("123NovaSenha")

const user1 = await User.create({
    username: "Usuario1",
    email: "usuario1@mail.com",
    hash: hashSenha
});

const user2 = await User.create({
    username: "Usuario2",
    email: "usuario2@mail.com",
    hash: hashSenha
});

const user3 = await User.create({
    username: "Usuario3",
    email: "usuario3@mail.com",
    hash: hashSenha
});

await exercicios.create({
    treino: "Musculação",
    exercicio: "Supino Reto",
    grupo: "Peitoral",
    series: "3x10",
    repeticoes: "10",
    peso: "50kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user1.id
  });
  
  await exercicios.create({
    treino: "Musculação",
    exercicio: "Agachamento Livre",
    grupo: "Perna",
    series: "3x8",
    repeticoes: "8",
    peso: "80kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user1.id
  });
  
  await exercicios.create({
    treino: "Musculação",
    exercicio: "Remada Curvada",
    grupo: "Costas",
    series: "4x12",
    repeticoes: "12",
    peso: "40kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user1.id
  });
  
  await exercicios.create({
    treino: "Crossfit",
    exercicio: "Clean and Jerk",
    grupo: "Corpo inteiro",
    series: "3x10",
    repeticoes: "10",
    peso: "50kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user2.id
  });
  
  await exercicios.create({
    treino: "Crossfit",
    exercicio: "Box Jump",
    grupo: "Perna",
    series: "3x8",
    repeticoes: "8",
    peso: "80kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user2.id
  });
  
  await exercicios.create({
    treino: "Crossfit",
    exercicio: "Pull-Up",
    grupo: "Costas",
    series: "4x12",
    repeticoes: "12",
    peso: "0kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user2.id
  });
  
  await exercicios.create({
    treino: "HIIT",
    exercicio: "Burpee",
    grupo: "Corpo inteiro",
    series: "3x10",
    repeticoes: "10",
    peso: "0kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user3.id
  });
  
  await exercicios.create({
    treino: "HIIT",
    exercicio: "Jumping Jack",
    grupo: "Corpo inteiro",
    series: "3x8",
    repeticoes: "8",
    peso: "0kg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    idUser: user3.id
  });
  
  await exercicios.create({
    treino: "HIIT",
    exercicio: "Mountain Climber",
    grupo: "Corpo inteiro",
    series: "4x12",
    repeticoes: "12",
    peso: "0kg",
    link: "https://www.youtube.com/watch?v=QUjJHQjnXs",
    idUser: user3.id
});
