// JWT
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";


dotenv.config();
const SECRETKEY = process.env.SECRETKEY;

export function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, SECRETKEY, function (err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
  
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  }

