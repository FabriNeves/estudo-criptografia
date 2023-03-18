import jwt from 'jsonwebtoken';
const secretKey = 'minha_chave_secreta';

// middleware para verificar o token JWT
function verificarToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // obter o token do header Authorization
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: 'Token não fornecido' });
  }
}

// usar o middleware em todas as rotas que exigem autenticação
app.get('/rota_autenticada', verificarToken, (req, res) => {
  res.json({ message: `Olá, ${req.user.username}!` });
});
