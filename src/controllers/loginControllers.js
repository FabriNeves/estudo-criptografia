import { User } from '../models/loginSchema.js';
// modulo de resposta | Sugestão do Jean 
import baseReponseModule from "../config/responseDefaultObj.js";

// Importação de User 
import userModule from '../config/userModule.js';

// colocar todo o JWT em um unico arquivo
// JWT
import jwt from 'jsonwebtoken';

// carregar variaveis de ambiente  | Boa prática
import dotenv from "dotenv";

dotenv.config();
const SECRETKEY = process.env.SECRETKEY;


class loginControllers {
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            // invalid user/email or password
            const user = await User.findOne({ where: { email } });
            if (!user) {
                const response = new baseReponseModule(`Invalid user/email or password`, false, 404, "not required");
                res.status(404).send(response.toJSON());
                return;
            }
            //* add  aqui a comparação de hash *//            
            const match = await userModule.verifyPassword(password, user.dataValues.hash);
            if (!match) {
                const response = new baseReponseModule(`Invalid user/email or password`, false, 401, "not required");
                res.status(401).send(response.toJSON());
                return;
            }
            // Resposta
            const id = user.id;
            const token = jwt.sign({ id }, SECRETKEY, {
                expiresIn: '1h'// expires in 5min
            });
            const response = new baseReponseModule({ user: id, auth: true, token: token, expiresIn: "1h" }, true, 200, "required");
            res.status(200).send(response.toJSON());
        } catch (error) {
            // Resposta
            //console.log(error)
            const response = new baseReponseModule(error.errors, false, 500, "not required");
            res.status(500).send(response.toJSON());
        }
    }

    // Somente para desenvolvimento. 
    static async read(req, res) {
        try {
            const user = await User.findAll();
            res.json(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async register(req, res) {
        const { username, email, password } = req.body;
        console.log(req.body);
        const hash = await userModule.hashPassword(password);
        const newRegister = new userModule(username, email, hash);

        try {
            const user = await User.create(newRegister);
            // Resposta
            const response = new baseReponseModule(`User created :${JSON.stringify(user.username)}`, true, 200, "not required");
            res.status(200).send(response.toJSON());
        } catch (error) {
            // Resposta
            const response = new baseReponseModule(error, false, 500, "not required");
            res.status(500).send(response.toJSON());
        }

    }

    // static async update(req, res) {
    //     const { id } = req.params;
    //     const atualizacoes = req.body;
    //     console.log(atualizacoes);
    //     try {
    //         const aluno = await Aluno.findOne({ where: { id } });
    //         if (aluno) {
    //             if (atualizacoes) {
    //                 await aluno.update(atualizacoes);
    //                 res.json(aluno);
    //             } else {
    //                 res.status(406).send("Atualização vazia.");
    //             }

    //         } else {
    //             res.status(404).send('Aluno não encontrado.');
    //         }
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findOne({ where: { id } });
            if (user) {
                await user.destroy();
                const response = new baseReponseModule({ comandName: "delete", id: id, user: user }, true, 200, "required");
                res.status(200).send(response.toJSON());
            } else {
                const response = new baseReponseModule("user not found", false, 404, "required");
                res.status(404).send(response.toJSON());
            }
        } catch (error) {
            const response = new baseReponseModule(error.errors, false, 500, "required");
            res.status(500).send(response.toJSON());
        }
    }

}


export default loginControllers;