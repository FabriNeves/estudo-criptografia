import express from "express";

//Rotas 
import loginRouter from "./routes/loginRoutes.js";
import registerRouter from "./routes/registerRoutes.js";


const secretKey = 'minha_chave_secreta';




const app = express();

const SECRETKEY = process.env.SECRETKEY;

app.use(express.json())
app.use(loginRouter);
app.use(registerRouter);


//authentication
// app.post('/login', (req, res, next) => {
//   //esse teste abaixo deve ser feito no seu banco de dados
//   if (req.body.user === 'luiz' && req.body.password === '123') {
//     //auth ok
//     const id = 1; //esse id viria do banco de dados
//     const token = jwt.sign({ id }, SECRETKEY, {
//       expiresIn: '1h'// expires in 5min
//     });
//     return res.json({ auth: true, token: token });
//   }

//   res.status(500).json({ message: 'Login inválido!' });
// })

// app.post('/logout', function(req, res) {
//     res.json({ auth: false, token: null });
// })

app.get("/", (req, res) => {
  const response = new baseReponseModule(req.body, true, 200, "not required");
  res.status(200).send(response.toJSON());

});

// app.get('/clientes', verifyJWT, (req, res, next) => {
//   console.log("Retornou todos clientes!");
//   res.json([{ id: 1, nome: 'luiz' }]);
// })

// ---> Server.js
export default app;