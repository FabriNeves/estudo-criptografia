import { User } from '../models/loginSchema.js';
// modulo de resposta | Sugestão do Jean 
import baseReponseModule from "../config/responseDefaultObj.js";
// JWT
import jwt from 'jsonwebtoken';

// carregar variaveis de ambiente  | Boa prática
import dotenv from "dotenv";

dotenv.config();
const SECRETKEY = process.env.SECRETKEY;


class loginControllers {
    static async login(req, res) {
        const { email, password } = req.body;
        console.log({ email, password });
        const hash = password;
        try {
            // invalid user/email or password
            const user = await User.findOne({ where: { email } });
            if (!user) {
                const response = new baseReponseModule(`Invalid user/email or password`, false, 404, "not required");
                res.status(404).send(response.toJSON());
                return;
            }

            //* add  aqui a comparação de hash *//

            const userAuth = await User.findOne({ where: { hash } })
            if (!userAuth) {
                const response = new baseReponseModule(`Invalid user/email or password`, false, 401, "not required");
                res.status(401).send(response.toJSON());
                return;
            }
            // Resposta
            const id = user.id;
            console.log(id);
            const token = jwt.sign({ id }, SECRETKEY, {
                expiresIn: '1h'// expires in 5min
            });
            const response = new baseReponseModule({ user: id, auth: true, token: token }, true, 200, "required");
            res.status(200).send(response.toJSON());
        } catch (error) {
            // Resposta
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
        const newRegister = req.body;
        try {
            const user = await User.create(newRegister);
            // Resposta
            const response = new baseReponseModule(`User created :${JSON.stringify(user)}`, true, 200, "not required");
            res.status(200).send(response.toJSON());
        } catch (error) {
            // Resposta
            const response = new baseReponseModule(error.errors, false, 500, "not required");
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